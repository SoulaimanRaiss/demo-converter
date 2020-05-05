const express = require('express');
const serverStatice = require('serve-static');
const path = require('path');

const app = express();

app.use('/', serverStatice(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8080;
app.listen(port);

console.log('Listening on port: ' + port);