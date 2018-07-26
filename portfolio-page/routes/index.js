const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  let obj = {
    title: 'Главная страница'
  };
  Object.assign(obj, req.app.locals.settings);
  res.render('pages/index', obj);
});

router.get('/blog', function (req, res) {
  let obj = {
    title: 'Blog'
  };
  Object.assign(obj, req.app.locals.settings);
  res.render('pages/blog', obj);
});

module.exports = router;