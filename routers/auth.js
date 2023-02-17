const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("hello world")

})

router.post('/register',async (req,res)=>{
    console.log(req.body)
    res.json({message:req.body})
    try{
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
})

module.exports=router