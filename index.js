var express = require('express');
var bodyParser = require('body-parser');
var quiz = require('./quiz')
var app = express();

const port = 9192

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {
    var palindromeResult = quiz.palindrome(request, response)
    var groupWordResult = quiz.groupWords(request, response)
    var generateWordsResult = quiz.generateWords(request, response)
    var findSummaryResult = quiz.findSummary(request, response)

    response.json([
        palindromeResult,
        groupWordResult,
        generateWordsResult,
        findSummaryResult
    ])
});

app.listen(port, () => console.log(`Application listening on port ${port}!`));