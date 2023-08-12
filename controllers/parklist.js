const express = require("express");
const router = express.Router();


// home route
router.get("/parklist",(req, res)=>{
    res.render("parklist.pug")
});





module.exports = router
