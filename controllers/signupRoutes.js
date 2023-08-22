const express = require("express");
const router = express.Router();
const Signup = require("../models/signupModel");
const passport = require("passport");

// signup route
router.get("/signup", (req, res) => {
  res.render("signup.pug");
});

// this is the first post
router.post("/register", async (req, res) => {
  try {
    const user = new Signup(req.body);
    console.log(req.body);
    await Signup.register(user, req.body.password);
    res.redirect("back");
  } catch (error) {
    res.status(400).send({ message: "failed to signup user" });
    console.log(error);
  }
});

// route for signin
router.get("/login", (req, res) => {
  res.render("signup.pug");
});



router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/api/login" }),
  (req, res) => {
   try{
    req.session.user = req.user;
    let loggedinUser = req.session.user.email;
    console.log(req.session.user);
    //  console.log(loggedinUser)

    console.log(req.body);
    console.log(req.session.user.manager);
    //  these lead to the dashboards of the user
    if (req.session.user.manager === "park") {
      // res.render("park.pug", { loggedinUser });
      res.render("home.pug");
    } else if (req.session.user.manager === "battery") {
      res.render("home.pug");
    } else if (req.session.user.manager === "tires") {
      res.render("home.pug");
    } else {
      res.send("not route user");
    } 
   }catch(error){
   res.status(400).send("could not login user")
   }
  }
);

// for loggingout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/api/login");
  })
  console.log("you've been logged out")
});

module.exports = router;
