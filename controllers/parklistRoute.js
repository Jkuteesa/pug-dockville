const express = require("express");
const router = express.Router();


// home route
router.get("/parklist",(req, res)=>{
    res.render("home.pug")
});





module.exports = router