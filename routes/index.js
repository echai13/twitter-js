const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

router.get('/', function (req, res) {
  console.log("hi")
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
});

router.get('/users/:name', function(req, res) {
  let name = req.params.name;
  let list = tweetBank.find( {name: name} );
  console.log(list)
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  let id  = req.params.id;
  let list = tweetBank.find( {id: Number(id)} );
  console.log(list)
  res.render( 'index', { tweets: list } );
});

router.post('/tweets', function(req, res) {
  console.log("Body: ", req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
