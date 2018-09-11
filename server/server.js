var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/data', function (req, res) {
    var data = { user: 'Hello World'}
    res.send(data);
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log(host, port);

})