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

app.listen(port, function(err) {
    if(err) {
        console("Error " + err);
    }
    open('http://localhost:'+port);
    console.log("Express server Started @ port " + port);
});