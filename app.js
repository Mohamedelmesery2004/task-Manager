const express = require("express");
const Tasks = require("./Routes/tasks");
const connectDB = require("./DB/connetion")
const app = express();
require('dotenv').config();
app.use(express.json());
const port = 3000;

app.use(express.static('./public'))
const start = async ()=>
{
  try {
    connectDB(process.env.Mongoose_Url);
    app.listen(port,()=> console.log(`server listen at ${port}`));

  } catch (error) {
    console.log(error)
  }
}
start();
app.use("/api/v1/tasks", Tasks);
