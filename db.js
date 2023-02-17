const mongoose=require('mongoose')
const dotenv=require('dotenv')
mongoose.set('strictQuery', false);
dotenv.config({ path:'./config.env'})

const db=process.env.Database

const connectToMongo=()=>{
    mongoose.connect(db).then(()=>
{
    console.log("connection successful")
}).catch((err)=>console.log('no connection'))
}
module.exports =connectToMongo