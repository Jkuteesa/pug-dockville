const express = require("express");
const router = express.Router();


// index route
router.get("/dashboard",(req, res)=>{
    res.render("dashboard.pug")
});





module.exports = router