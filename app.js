const fs = require('fs');
const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config/config.json');

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

app.post('/install/login', (req, res) => {
  console.log('Post LOgin request: ', req);
});

app.get('/install/login', (req, res) => {
  const orgid = '';
  const loginParams = {
    response_mode: config.response_mode,
    response_type: config.response_type,
    scope_login: config.scope_login,
    client_id: config.app_id,
    redirect_uri: config.login_callback_url,
    nonce: ''
  };
  console.log(loginParams);
  var queryString = Object.keys(loginParams)
    .map(key => {
      return (
        encodeURIComponent(key) + '=' + encodeURIComponent(loginParams[key])
      );
    })
    .join('&');
  const redirectUrl = `${config.url_authorize}?${queryString}`;
  console.log(redirectUrl);

  res.redirect(redirectUrl);
});

app.get('/install/grandservice', (req, res) => {
  const data = {
    customers: ['grandservice', { name: 'Customer 2', text: '112434' }]
  };
  res.render('index', data);
});

app.get('/webhooks', (req, res) => {
  // 122ajfsfjsgaj24724721
  console.log(req.query);
  res.status(200).send(req.query['hub.challenge']);
});
