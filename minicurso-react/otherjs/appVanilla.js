/*
*
* Pleb.js
*
*/

document.getElementById('appVanilla').innerHTML = "<h1 id='titlePleb'>Hola Mundo Pleb</h1><br/>"

/*
*
* Vanilla.js
*
*/

const el = document.createElement('h1');
el.setAttribute('id', 'titlePro');
el.textContent = 'Hola Mundo Pro';
document.getElementById('appVanilla').appendChild(el);

/*
*
*
* ¿Cómo haría con Span?
*
*
*/


// Pleb:
document.getElementById('appVanilla').innerHTML = "<h1 id='titlePleb2'>Hola <span>Mundo Pleb</span></h1><br/>"

//Pro:
const el2 = document.createElement('h1');
const child = document.createElement('span');
el2.setAttribute('id', 'titlePro2');
el2.textContent = 'Hola ';
child.textContent = 'mundo';
el2.appendChild(child)
document.getElementById('appVanilla').appendChild(el2);


// Why do things have to be so complicated?