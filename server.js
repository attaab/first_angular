var express = require('express'),
    app = express(),
    port = process.env.PORT || 4040;

    app.use('/app', express.static("app"));
    app.use('/content', express.static('content'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



app.listen(port, console.log("app listening on port " + port));