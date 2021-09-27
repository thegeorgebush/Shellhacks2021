var express = require('express');
var app = express();
app.listen(3000, function () {
  console.log('server running on port 3000');
})


app.get('/', function(req,res)
{
    var spawn = require("child_process").spawn;

    var process = spawn('python', ['calculations.py', req.query.hourlyPay, req.query.hoursWorked])

    process.stdout.on('data', function (data) {
        res.send(data.toString());
      });
})
