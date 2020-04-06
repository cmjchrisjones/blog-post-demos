const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// app.get('/', function (req, res) {
//   res.send('Hello Fancy VS Code World')
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendfile('index.html');
})

app.post('/process', (req, res) => {
  res.send({ data: [req.body] });
  
})

console.log('ready and waiting for connections');

module.exports = app.listen(2020);