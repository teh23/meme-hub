var memsModel = require('../models/memsSchema.js')

exports.index = (req, res) =>{
    
    memsModel.create({name: "mame"})
    memsModel.findOne({name: "mame"}, (err, doc)=>{
        res.send(doc)
    })
}