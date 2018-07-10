const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/todos", todoRoutes);
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  res.sendFile("index.html");
});

//Error Handling Stuff
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});


//Starting the Server
app.listen(process.env.PORT || 3001, function() {
  console.log("Server starting on port" + process.env.PORT);
});
