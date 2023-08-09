const express = require("express");
const Park = require("../models/parkModel");
const router = express.Router();

router.get("/parkform", (req, res) => {
    res.render("park.pug")
})

router.post("/park",async (req, res) => {
    try{
        const park = new Park(req.body);
        await park.save();
        console.log(req.body);
        res.redirect("/api/parkform") //it gives the page we want it to redirect to.
        
    }
    catch(error){
        res.status(400).render("park.pug");
        console.log(error);
    }

})
// for rendering data from dabase to the list.
    router.get("/parklist", async(req, res) =>{
        try{
            let items = await Park.find();
            const parkingCount = await Park.countDocuments();
            // calculating the total amount 
            let amount = await Park.aggregate([
                {'$group': {_id: '$all',
            totalamount: {$sum: '$amount'}
        }}
         //let ages =group{totalAge{sum}}
            ])
              
           // this is passing/ rendering variables to the park list
            res.render("parklist.pug",
             {parks:items, parkingCount, totalAmount:amount[0].totalamount });
        }
        catch(error){
            console.log(error);
            return res.status(400).send({message: "apologies, could not retrieve park"});
           
        }
    })

// when deleting an park(client) from the database.
router.post("/park/delete", async (req, res)=>{
    try{
        await Park.deleteOne({_id: req.body.id});
        res.redirect("back");
    }
    catch(error){
        res.status(400).send("unable to delete item from the database");
    }
})    


// how to update data.
// editing data
router.get("/park/edit/:id", async(req, res)=>{
    try{
        const emp = await Park.findOne({
            _id:req.params.id
        })
        res.render("parkedit", {park:emp});
    }
    catch(error){
        res.status(400).send("Could not find park client in database.");
        console.log(error)
    }
})

// how to edit park data
// then later we post the newly edited data
router.post("/park/edit", async (req, res) => {
    try{
        await Park.findOneAndUpdate({_id: req.query.id},req.body);
        res.redirect("/api/parklist")
    }catch(error){
        res.status(400).send("Could not edit park data.")
        console.log(error);
    }
})


module.exports = router
