var express = require('express')
var router = express.Router()

var mems_controller = require('../controllers/mems.js')


router.get("/", mems_controller.index);

router.get("/:id", (req, res) =>{
    res.send('')
})

router.post("/", (req, res) =>{
    res.send('')
})
router.put("/:id", (req, res) =>{
    res.send('')
})

router.delete("/:id", (req, res) =>{
    res.send('')
})

module.exports = router