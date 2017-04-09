//Imports
import path from 'path';
import open from 'open';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */

//Middlewares
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//Routes
app.get('/', (req, res) => {
    // res.send("Hello from Express");
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.get('/users', (req, res) => {
    res.json([
        {"id":1, "firstName":"Ashish", "lastName":"Verma", "email":"ashishrodio@gmail.com"},
        {"id":2, "firstName":"Anand", "lastName":"Kumar", "email":"anandkmr057@gmail.com"},
        {"id":1, "firstName":"John", "lastName":"Doe", "email":"john@gmail.com"}
    ])
})

app.listen(port, function(err) {
    if(err) {
        console("Error " + err);
    }
    open('http://localhost:'+port);
    console.log("Express server Started @ port " + port);
});