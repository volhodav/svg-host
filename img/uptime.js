var http = require("http");
setInterval(function () {
    http.get("http://pmnv.herokuapp.com");
}, 300000);
(300000)