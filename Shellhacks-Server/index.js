var express = require('express');
var app = express();
app.listen(3000, function () {
  console.log('server running on port 3000');
})


app.get('/submit', function(req,res)
{
    res.status(200).send({message:"hello"})
})
