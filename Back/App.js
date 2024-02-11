import express from "express";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"

const PORT = 6000


const app = express()
// initialiser => 
app.use(bodyParser.json())
http.createServer(app)
app.use(cors({origin: "*",credentials:true}));
app.use(express.static('images'))
app.use(bodyParser.json());

// Cnx Data Base
mongoose.connect("mongodb://127.0.0.1:27017/doctor")
.then(()=>{
    console.log('Data base Done!');
}).catch((er)=>{
    console.log("validation err is ",er);
})
app.listen(PORT,()=>{
   console.log(`PORT IS ${PORT}`)
})