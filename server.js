const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const PORT = 5000;

app.listen(PORT, () => {
  console.log('The server is running Port=' + PORT);
});
