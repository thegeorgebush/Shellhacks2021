var express = require('express');
var createError = require('http-errors')
var app = express();

app.use(express.json());

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));

app.get("/", (req, res) => res.send("Hello World!!!"));

app.listen(5000, function () {
  console.log('server running on port 5000');
})



app.post('/submit', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  var spawn = require("child_process").spawn;

    var process = spawn('python', ['./calculations.py', 
      req.query.hourlyPay, 
      req.query.hoursWorked
    ]);

    process.stdout.on('data', function (data) {
        //console.log(data.toString())
        //console.log(data.toString());
        //var perosonObject = JSON.parse(data.toString())
        //console.log(perosonObject)
        res.json(JSON.stringify(data.toString()));
        //res.send(data.toString());
      });
});

//app.get('/', callCalculations);

function callCalculations(req, res)
{
  /*
    var spawn = require("child_process").spawn;

    var process = spawn('python', ['./calculations.py', 
      req.query.hourlyPay, 
      req.query.hoursWorked
    ]);

    process.stdout.on('data', function (data) {
        res.send(data.toString());
      });
      */
}

/*
// Error Handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

*/