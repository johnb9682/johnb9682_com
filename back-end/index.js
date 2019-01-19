const express = require('express');
const app = express(); 
const request = require('request-promise');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/resumedata', (req, res) => {
  var resumeData = 'public/' + 'resumeData.json';
  console.log('resumeData directory: ' + resumeData);
  res.sendfile(resumeData);
});

app.listen(3666, () => {
  console.log('Example app listening on port 3666!');
});