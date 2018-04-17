
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();


app.use(express.static('public'));

const server = app.listen(port);


console.log('app listening on port: ' + port);













