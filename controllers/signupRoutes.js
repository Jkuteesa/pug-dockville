const express = require("express");
const router = express.Router();
const Signup = require("../models/signupModel");
const passport = require("passport");


// signup route
router.get("/signup",(req, res)=>{
    res.render("signup.pug")
});

// this is the first post
router.post("/register", async (req, res) =>{
    try{
        const user = new Signup(req.body);
        console.log(req.body);
        await Signup.register(user, req.body.password);
        res.redirect("back")
    }catch(error){
        res.status(400).send({message: "failed to signup user"});
        console.log(error);
    }
});

// route for signin
router.get("/login", (req, res) =>{
    res.render("signup.pug");
  });
  
  router.post("/login", passport.authenticate("local", { failureRedirect: "/api/login" }), (req, res) => {
    req.login(req.user, (err) => {
        if (err) {
        
            return res.status(400).send({ message: "failed to log in" });
        }
       
        res.redirect("/home"); // Redirect to the home page
    });
});

//   router.post("/login", passport.authenticate("local",
//   {failureRedirect: "/api/login"}), 
//   (req, res)=> {
//     req.session.user = req.user
//    let loggedinUser = req.session.user.firstname;
//    console.log(loggedinUser)


//    console.log(req.body)
//    console.log(req.session.user.rolename)
//   //  these lead to the dashboards of the user
//    if(req.session.user.rolename === "director"){
//     res.render("director_.pug", {loggedinUser})
//     res.render("director_.pug")
//    }
//    else if(req.session.user.rolename === "user"){
//     res.render("user_.pug")
//    }
//    else if(req.session.user.rolename === "salesagent"){
//     res.render("salesAgent_.pug")
//    }
//    else{res.send("not route user")} 
//   });
  
// 





module.exports = router