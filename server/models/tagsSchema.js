var mongoose = require("mongoose")
var Schema = mongoose.Schema

var tagsSchema = new Schema({
   title: String,
   data: Date,
})




module.exports = mongoose.model('tags', tagsSchema, 'tags')