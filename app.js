var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var port = process.env.PORT || 5000;
var works = [{
    Link: '/1',
    Text: 'Stairs',
    Photo: [
        '/photos/IMG_0029.jpg',
        '/photos/IMG_0030.jpg',
        '/photos/IMG_0031.jpg',
        '/photos/IMG_0032.jpg'
    ],
    Background: '/photos/IMG_0030.jpg',
    About: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
}];
var nav = [{
    Link: '/',
    Text: 'Tim Clark Design'
}, {
    Link: '/',
    Text: 'Home'
}, {
    Link: '/About',
    Text: 'About'
}, {
    Link: '/#works',
    Text: 'Works'
}];
var workRouter = require('./src/routes/workRoutes.js')(nav, works);
var abtRouter = require('./src/routes/abtRoutes.js')(nav);
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Work', workRouter);
app.use('/About', abtRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'hello from render',
        nav: nav,
        works: works
    });
});

app.listen(port, function(err) {
    console.log('running on port ' + port);
});