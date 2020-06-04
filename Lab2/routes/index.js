'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    //Variable x
    let x = req.query.x;
    //Variable y
    let y = req.query.y;
    //Method
    let method = req.query.method;

    function calculate(method, x, y) {
        console.log('Calculating for the method of ' + method + ' for x = ' + x + ' and y = ' + y + '.');        if (method == 'add') {            console.log(parseInt(x) + parseInt(y));
        }        else if (method == 'subtract') {            console.log(x - y);
        }        else if (method == 'multiply') {            console.log(x * y);
        }        else if (method == 'divide') {        console.log(x / y);        }         else {            console.log('Error, please check URL!')
        }    } 
    calculate(method, x, y);
    console.log(req.query);
    res.render('index', { title: 'Express' });
});

module.exports = router;
