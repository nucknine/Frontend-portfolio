const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', function (req, res) {
    let obj = {
        title: 'Главная страница'
    };

    Object.assign(obj, req.app.locals.settings);
    res.render('pages/index', obj);
});

router.get('/blog', function (req, res) {
    let obj = {
        title: 'Блог'
    };

    Object.assign(obj, req.app.locals.settings);
    const Model = mongoose.model('blog');

    // получаем список записей в блоге из базы
    Model
        .find()
        .then(items => {
            // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
            // записей в блоге
            Object.assign(obj, { items: items });
            res.render('pages/blog', obj);
        });
});

router.get('/about', function (req, res) {
    let obj = {
        title: 'Обо мне',
        skills: [
            {
                'Frontend': ['HTML5', 'CSS3', 'JS']
            },
            {
                'Backend': ['PHP', 'C#', 'mySQL', 'XML']
            },
            {
                'Workflow': ['Git', 'Gulp', 'npm']
            }
        ]
    };

    Object.assign(obj, req.app.locals.settings);
    res.render('pages/about', obj);
});

router.get('/works', function (req, res) {
    let obj = {
        title: 'Мои работы'
    };

    Object.assign(obj, req.app.locals.settings);
    const Model = mongoose.model('pic');

    Model
        .find()
        .then(items => {
            // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
            // записей в блоге
            Object.assign(obj, { items: items });
            res.render('pages/works', obj);
        });
});

module.exports = router;