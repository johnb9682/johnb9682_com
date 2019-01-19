const express = require('express');
const app = express(); 
const request = require('request-promise');
var fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/resumedata', (req, res) => {
  var resumeData = 'public/' + 'resumeData.json';
  console.log('resumeData directory: ' + resumeData);
  var resumeData = JSON.stringify(fs.readFileSync(resumeData, 'utf8'));
  console.log(resumeData);
  res.setHeader('Content-Type', 'application/json');
  res.send(resumeData);
  // res.sendFile(resumeData);
});

app.listen(3666, () => {
  console.log('Example app listening on port 3666!');
});