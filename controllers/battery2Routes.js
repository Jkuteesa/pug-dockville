const express = require("express");
const Client = require("../models/batteryModel");
const router = express.Router();


// battery2 route
router.get("/batteryform",(req, res)=>{
    res.render("battery2.pug")
});
//posting data to database
router.post("/battery2",async (req, res) => {
    try{
        const client = new Client(req.body);
        await client.save();
        console.log(req.body);
        res.redirect("/api/batteryform")

    }catch(error){
        res.status(400).render("battery2.pug");
        console.log(error);
    }

})
// for fetching data from the database for it to appl in the batterylist
router.get("/batterylist", async(req, res) =>{
    try{
    let items = await Client.find();
         const parkingCount = await Client.countDocuments();
    //     // calculating the total amount
        let amount = await Client.aggregate([
           {'$group': {_id: '$all',
         totalamount: {$sum: '$amount'}
 }}


         ])
         //rendering variables to the batterylist
        res.render("batterylist.pug",
        {clients:items, parkingCount, totalAmount:amount[0].totalamount });
    }catch(error){
        console.log(error);
        return res.status(400).send({message: "apologies, could not retrieve clients"});

    }
})

// // when deleting a Client from database
router.post("/client/delete", async (req, res) =>{
    try{
        await Client.deleteOne({_id: req.body.id});
        res.redirect("back");

    }catch(error){
        res.status(400).send("unable to delete item from the database.");
    }
})

// // editing/updating data

router.get("/client/edit/:id", async(req, res)=>{
    try{
        const customer = await Client.findOne({
            _id:req.params.id
        })
        res.render("battery2edit", {client:customer});
    }
    catch(error){
        res.status(400).send("Could not find battery client in database.");
        console.log(error)
    }
})
router.post("/client/edit", async (req, res) => {
    try{
        await Client.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect("/api/batterylist")
    }catch(error){
        res.status(400).send("Could not edit client data.")
        console.log(error);
    }
})



 module.exports = router