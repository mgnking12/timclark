var express = require('express');
var abtRouter = express.Router();

var router = function(nav, works) {
    abtRouter.get('/', function(req, res) {
        var id = req.params.id;
        res.render('about', {
            title: 'hello from render',
            nav: nav,
        });
    });

    return abtRouter;

};

module.exports = router;