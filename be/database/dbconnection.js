import mongoose from "mongoose";

export const dbconnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("Connect to db is successfully!!");
        
    }).catch((err)=>{
        console.log(`Some error occured while connecting to db ${err}`);
        
    })
}
  