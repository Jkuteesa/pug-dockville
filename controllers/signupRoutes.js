const express = require("express");
const Signup = require("../models/signupModel")
const passport = require("passport");
const router = express.Router();


// signup route
router.get("/signup",(req, res)=>{
    res.render("signup.pug")
});

// this is the first post
router.post("/register", async (req, res) =>{
    try{
        const manager = new Signup(req.body);
        console.log(req.body);
        await Signup.register(manager, req.body.password);
        res.redirect("/api/signup")
    }catch(error){
        res.status(400).send({message: "failed to signup manager"});
        console.log(error);
    }
})







module.exports = router