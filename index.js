var express = require('express');
var bodyParser = require('body-parser');
var quiz = require('./quiz')
var app = express();

const port = 9192

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {
    // quiz.palindrome(request, response)
    quiz.groupWords(request, response)
});

app.listen(port, () => console.log(`Application listening on port ${port}!`));