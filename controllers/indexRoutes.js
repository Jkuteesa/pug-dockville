const express = require("express");
const router = express.Router();


// index route
router.get("/index",(req, res)=>{
    res.render("index.pug")
});





module.exports = router