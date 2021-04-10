var mongoose = require("mongoose")
var Schema = mongoose.Schema

var memsSchema = new Schema({
    login : String,
    
})


module.exports = mongoose.model('mems', memsSchema)