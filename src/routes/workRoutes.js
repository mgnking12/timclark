var express = require('express');
var workRouter = express.Router();

var router = function(nav, works) {
    workRouter.get('/:id', function(req, res) {
        var id = req.params.id;
        res.render('work', {
            title: 'hello from render',
            nav: nav,
            work: works[id]
        });
    });

    return workRouter;

};

module.exports = router;