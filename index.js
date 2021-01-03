const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello What');
});

app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));

