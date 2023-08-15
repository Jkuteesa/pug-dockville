const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const passport = require("passport");

// importing our database setup
const connectDB = require("./config/dbConfig");
const port = process.env.PORT || 4000;
const app =express();

const Signup = require("./models/signupModel")
// importing indexRoutes which we exported in index pug
const indexRoutes = require("./controllers/indexRoutes")
const homeRoutes = require("./controllers/homeRoutes")
const parkRoutes = require("./controllers/parkRoutes")
const battery2Routes = require("./controllers/battery2Routes")
const tires2Routes = require("./controllers/tiresRoutes")
const signupRoutes = require("./controllers/signupRoutes")
const dashboardRoutes = require("./controllers/dashboardRoutes")

// this is importing the express session an using it directly to pass parameters.
const expressSession = require("express-session")({
    secret: "secret", 
    resave: false,
    saveUnitialized: false
})
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// calling the configuration to run
connectDB();

// setting up line using the new engine
app.engine("pug", require("pug").__express);
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"));

app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());


//setting up directory for static files
// __dirname means starting from the root folder called public
// line 16 should be above line 19(lines might keep changing but you get)
app.use(express.static(path.join(__dirname, "public")))

// using imported routes
app.use("/api", indexRoutes)
app.use("/api", homeRoutes)
app.use("/api", parkRoutes)
app.use("/api", battery2Routes)
app.use("/api", tires2Routes)
app.use("/api", signupRoutes)
app.use("/api", dashboardRoutes)





// running the server on a specific port(3000)
// this should always be the last line in the server file
app.listen(port, () =>console.log(`listening on port 3000`));
// this is a call back
