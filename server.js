const express = require('express');
var app = express();
const PORT = process.env.port || 3000;
// app.get('/', function(req,res){
//     res.send('Hello Express');
// });

var middleware = {
    requireAuthentication: function(req,res,next){
        console.log('private route hit');
        next();
    },
    logger: function(req,res,next){
        console.log(req.method + ' ' + req.originalUrl + 'Date: ' + new Date().toString());
        next();
    }
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log("Express server started on port " + PORT);
    
});

