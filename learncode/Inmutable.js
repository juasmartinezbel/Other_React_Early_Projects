var a={name:"Will"}

a.name = "Fred"
// a -> Object {name: "Fred"}

//--------------------------------
// Asignación por valor:
var a = 1;

var b = a;

b = 3;Asignación

//a = 1

//--------------------------------
//Asignación por referencia

var a = {name: "Will"}

var b = a;

b.name = "Fred"

// a --> Object{name: "Fred"}
//--------------------------------
var a = {name: "Will"}

var a = {name: "Will, age: 35"}
// a -> Object{name: "Will", age: 35}

					//Objeto inicial, objeto base, valor a cambiar
var b = Object.assign({}, a, {name: "Fred"})

// a -> Object{name: "Will", age: 35}
// b -> Object{name: "Fred", age: 35}
//----------------------------------
var a = [0, 1, 2]
var b = a.concat(3)
// a -> [0, 1, 2]
// b -> [0, 1, 2, 3]

//------------------------------------
var a = [0, 1, 2]
var b = a.filter((val) => val !==2)
// a -> [0, 1, 2]
// b -> [0, 1]
//-------------------------------

var a = {name: "Will", things: [0,1,2]}
var b = Object.assign({}, a, {name:"Fred"})
// a -> Object{name: "Will", things: [0,1,2]}
// b -> Object{name: "Fred", things: [0,1,2]}
// b.things -> things: [0,1,2]
// b.things.push(3) -> b.things: [0,1,2,3]
// a.things: [0,1,2,3]
// From the start:
b.things = a.things.concat(3)
//a.things = [0,1,2]
//b.things = [0,1,2,3]

/*
* Object assign :  Concat filter map reduce <- retornan objeto nuevo
*/
