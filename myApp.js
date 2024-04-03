let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    console.log('Hello World!');
})
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})






































 module.exports = app;
