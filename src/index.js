import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`  Server is running:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db connection failed: ",err );
})








/*
import express from "express";
const app = express();
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (err) => {
            console.log("ERROR: ",err ); 
            throw err 
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch(error){
        console.log("ERROR: ",error ); 
        throw err 
    }
})()*/