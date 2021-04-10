var mongoose = require("mongoose")
var Schema = mongoose.Schema

var memsSchema = new Schema({
    title: String,
    author: {type: Schema.Types.ObjectId, ref: 'users'},
    tags: [String],
    link: String,
    reactions: [{icon: String, count: Number}]
})




module.exports = mongoose.model('mems', memsSchema, 'mems')