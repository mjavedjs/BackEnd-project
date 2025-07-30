import e from "express";
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'


app.use(cors(
    {
        origin : process.env.CORS_ORIGIN,
        credentials:true
    }
))
app.use(express.urlencoded()); // url sa jo data is ko manage krta hia ;
app.use(express.static('public')); // pdf ya img aye to ma apna server ma store rakna chata ho  pulic asset folder hia ; 
app.use(cookieParser()); // brower sa cookies get kre ga server or saved hoge server par

app.use(express.json({limit:'20kb'})) // form  data k lia 
const app = express();



export { app } 