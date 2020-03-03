const fs = require('fs');
const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const configData = require('./config/config.json');

const http_port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.listen(http_port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Captive Portal are running :${http_port}`);
  }
});

app.get('/', (req, res) => {
  const data = {
    customers: ['Customer 1', { name: 'Customer 2', text: '112434' }]
  };
  res.render('index', data);
});

app.get('/install/login', (req, res) => {
  const data = {
    customers: ['Login', { name: 'Customer 2', text: '112434' }]
  };
  res.render('index', data);
});

app.get('/install/grandservice', (req, res) => {
  const data = {
    customers: ['grandservice', { name: 'Customer 2', text: '112434' }]
  };
  res.render('index', data);
});
