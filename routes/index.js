var express = require('express');
var router = express.Router();
var request= require('request');

/*transforming employees into a short number */

var d=[];
var e=[];
var x;
function kFormatter(num,newarray) {
    for (x in num) {
        if (num[x].employees > 999) {
            newarray[x] = (num[x].employees / 1000).toFixed(1).replace(/\.?0+$/, '')+'k';
        }
        else if (num[x].employees < 999) {
            newarray[x] = num[x].employeese;
        }
    }
    return newarray;
}
function BFormatter(num,newarray) {
    for (x in num) {
        newarray[x] = (num[x].revenue).replace(" Billion", "B");
        }
    return newarray;
}

/* GET home page. */
router.get('/', function(req, res, next) {
    request('https://whispering-castle-24552.herokuapp.com/users', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was receive
        var c;
        c= JSON.parse(body);
        kFormatter(c,d);
        BFormatter(c,e);
        res.render('index', { title: 'About', c:c, d:d, e:e});

    });
});

module.exports = router;
