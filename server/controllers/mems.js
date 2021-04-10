var memsModel = require('../models/memsSchema.js')
var userModel = require('../models/userSchema.js')
exports.index = (req, res) =>{
    
    // var user = new userModel({login : "Admin"})

    // var mems = new memsModel({
    //     name: "test1",
    //     author: user._id
    // })
    // mems.save((err)=>{
    //    if(err) return handleError(err)
    // })
    memsModel
    .findOne({name: "test1"})
    .populate("author")
    .exec((err, doc)=>{
        res.send(doc)
    })
    

    // memsModel.findOne({name: "test"}, (err, doc)=>{
    //     res.send(doc)
    // })
}