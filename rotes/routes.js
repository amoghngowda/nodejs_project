const express = require("express");
const router = express.Router();
const person = require('./../module/scheema');
router.get("/",async(req,res)=>{
    const doc = await person.find({});
    res.json(doc);
})
router.post("/post", async (req, res) => {
    try {
        const newdata = req.body;
        const newPerson = new person(newdata); // Use the imported Person model
        const response = await newPerson.save(); // Corrected typo: respones -> response
        console.log("saved", response); // Log the actual saved document (for debugging)
        res.status(201).json(response); // Send the saved document back in the response, 201 Created status code
    } catch (err) {
        console.error("error saving user:", err); // Log the actual error for debugging
        res.status(500).json({ error: "Failed to save user" }); // Send a more informative error response
    }
});
router.get("/:work",async(req,res)=>{
   
   try{
    const curwork = req.params.work;
        if(curwork=='hospital' || curwork=='bakery'){
            const response = await person.find({Work:curwork});
            console.log("found");
            res.status(200).json({message:"iyt is found",data:response});
        }
        else{
            res.json({error:"error"});
        }
   }
   catch(err){
       res.json("error");
   }
})
router.put("/:id",async (req,res)=>{
    try{
    const newid = req.params.id;
    const docum=req.body;
    const response = await person.findByIdAndUpdate(newid,docum);
    if(!response){
        res.status(404).send("person not found");
    }else{
        res.json("updated");
    }
}
   catch(err){
    console.log("error");
    res.status(404).json("error");
   }


})
router.delete("/:id",async(req,res)=>{
    try{
    const newid = req.params.id;
    const response= await person.findByIdAndDelete(newid);
    if(!response){
        res.json("error");
    }
    else{
        res.json("sucess");
    }
}
catch(err){
    console.log("in catch section");
    res.status(404).json("error");
}
})
module.exports = router;