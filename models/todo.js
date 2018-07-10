const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASEURL || "mongodb://soham:soham1@ds133621.mlab.com:33621/redux-todos-db", { useMongoClient: true });

mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
