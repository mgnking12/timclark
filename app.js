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
        '/photos/stairs/IMG_0029.jpg',
        '/photos/stairs/IMG_0030.jpg',
        '/photos/stairs/IMG_0031.jpg',
        '/photos/stairs/IMG_0032.jpg',
        '/photos/stairs/IMG_3422.jpg'
    ],
    Background: '/photos/stairs/IMG_0030.jpg',
    About: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
}, {
    Link: '/2',
    Text: 'Tables',
    Photo: [
        '/photos/tables/end_table1.jpg',
        '/photos/tables/end_table2.jpg',
        '/photos/tables/end_table3.jpg',
        '/photos/tables/end_table4.jpg',
        '/photos/tables/end_table5.jpg',
        '/photos/tables/kid_table1.jpg',
        '/photos/tables/kid_table2.jpg',
        '/photos/tables/side_table1.jpg',
        '/photos/tables/side_table2.jpg',
        '/photos/tables/side_table3.jpg',
        '/photos/tables/table_progress1.jpg',
        '/photos/tables/table_progress2.jpg',
        '/photos/tables/table_progress3.jpg',
        '/photos/tables/table_progress4.jpg',
        '/photos/tables/table_progress5.jpg',
        '/photos/tables/tv_stand.jpg',
    ],
    Background: '/photos/tables/end_table2.jpg',
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