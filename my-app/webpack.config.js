// Declarar contexto del proyecto
// Está en Producción o en Desarrollo para activar algunos DevTools o Plugins
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/dist/index.js", //Cual usará de base
  output: {
    path: __dirname + "/app/js", //Donde se guardará
    filename: "index.min.js" //Archivo de salidaConfiguración de modulos
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};