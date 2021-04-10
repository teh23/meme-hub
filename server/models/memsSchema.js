var mongoose = require("mongoose")
var Schema = mongoose.Schema

var memsSchema = new Schema({
    name: String,
    author: {type: Schema.Types.ObjectId, ref: 'users'}
})


module.exports = mongoose.model('mems', memsSchema, 'mems')