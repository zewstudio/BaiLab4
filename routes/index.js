var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/404', function(req, res, next) {
  res.render('404', { title: 'Express' });
});
router.get('/blank', function(req, res, next) {
  res.render('blank', { title: 'Express' });
});
router.get('/buttons', function(req, res, next) {
  res.render('buttons', { title: 'Express' });
});
router.get('/cards', function(req, res, next) {
  res.render('cards', { title: 'Express' });
});
router.get('/charts', function(req, res, next) {
  res.render('charts', { title: 'Express' });
});
router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Express' });
});
router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/tables', function(req, res, next) {
  res.render('tables', { title: 'Express' });
});
router.get('/utilities-animation', function(req, res, next) {
  res.render('utilities-animation', { title: 'Express' });
});
router.get('/utilities-border', function(req, res, next) {
  res.render('utilities-border', { title: 'Express' });
});
router.get('/utilities-color', function(req, res, next) {
  res.render('utilities-color', { title: 'Express' });
});
router.get('/utilities-other', function(req, res, next) {
  res.render('utilities-other', { title: 'Express' });
});

module.exports = router;
