//This file is not Transpiled, So must use CommonJS and ES5

//Register Babel to Transpile before tests Run
require('babel-register')();

//Disable Webpack Features that Mocha Doesn't Understand
require.extensions['.css'] = function() {};