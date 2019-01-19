const express = require('express');
const app = express(); 
const request = require('request-promise');
var fs = require('fs');
var cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res.send('Backend Server to johnb9682.com');
});

app.get('/resumedata', (req, res) => {
  var resumeData = 'public/' + 'resumeData.json';
  console.log('resumeData directory: ' + resumeData);
  var resumeData = JSON.stringify(fs.readFileSync(resumeData, 'utf8'));
 
  res.setHeader('Content-Type', 'application/json');
  res.send(resumeData); 
});

app.listen(3666, () => {
  console.log('Example app listening on port 3666!');
});