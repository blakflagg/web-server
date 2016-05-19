const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

const middleware = require('./middleware.js');

// app.get('/', function(req,res){
//     res.send('Hello Express');
// });



app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log("Express server started on port " + PORT);
    
});

