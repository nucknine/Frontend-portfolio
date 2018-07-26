const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  let obj = {
    title: 'Авторизация'
  };
  Object.assign(obj, req.app.locals.settings);
  res.render('pages/login', obj);
});


module.exports = router;