var express = require("express")
require('dotenv').config()
var app = express()
var memsRoutes = require("./routes/mems")
var usersRouters = require("./routes/users.js")

var mongoose = require("mongoose")

mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use("/api/mems" , memsRoutes)
app.use("/api/users", usersRouters )

app.listen(3000)