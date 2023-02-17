const express=require('express')
const router=express.Router()
const connectToMongo=require('./db')
const dotenv=require('dotenv')
dotenv.config({ path:'./config.env'})

connectToMongo();

const app=express()
const Host=process.env.Host;

// require('./models/userSchema')
app.use(express.json)
app.use(require('./routers/auth'))


const middleware=(req,res,next)=>{
    next()
}

// router.post('/register',(req,res)=>{
//     console.log(req.body)
//     res.json({message:req.body})
// })

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/about',middleware,(req,res)=>{
    res.send("hello about")
})

app.get('/login',(req,res)=>{
    res.send("hello alogin")
})
app.listen(Host,()=>
{
    console.log(`server is running ${Host}`)
})