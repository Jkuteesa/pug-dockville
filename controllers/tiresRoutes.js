const express = require("express");
const Tire = require("../models/tiresModel")
const router = express.Router();


// tiresroute
router.get("/tires",(req, res)=>{
    res.render("tires.pug")
});
router.post("/tires",async (req, res) => {
    try{
        const tires = new Tire(req.body);
        await tires.save();
        console.log(req.body);
        res.redirect("/api/tires") //it gives the page we want it to redirect to.
        
    }
    catch(error){
        res.status(400).render("tires.pug");
        console.log(error);
    }

})
// for rendering data from dabase to the list.
router.get("/tireslist", async(req, res) =>{
    try{
        let items = await Tire.find();
        const parkingCount = await Tire.countDocuments();
        // calculating the total amount 
        let amount = await Tire.aggregate([
            {'$group': {_id: '$all',
        totalamount: {$sum: '$amount'}
    }}

        ])
          
       // this is passing/ rendering variables to the tireslist
        res.render("tireslist.pug",
         {tires:items, parkingCount, totalAmount:amount[0].totalamount });
    }
    catch(error){
        console.log(error);
        return res.status(400).send({message: "apologies, could not retrieve tires clients"});
       
    }
})

// when deleting an tire from the database.
router.post("/tire/delete", async (req, res)=>{
    try{
        await Tire.deleteOne({_id: req.body.id});
        res.redirect("back");
    }
    catch(error){
        res.status(400).send("unable to delete item from the database");
    }
})    


// updating the tire clients
router.get("/tire/edit/:id", async(req, res) => {
    try{
        const tire = await Tire.findOne({
            _id:req.params.id
        })
        res.render("tiresedit",{tire:tire});

    }catch(error){
        res.status(400).send("Could not find client in database");
        console.log(error)
    }
})
router.post("/tire/edit", async (req, res) => {
    try{
        await Tire.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect("/api/tirelist")
    }catch(error){
        res.status(400).send("Could not edit park data.")
        console.log(error);
    }
})






module.exports = router