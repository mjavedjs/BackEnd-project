import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB =  async ()=>{
   try {
    const connectionIntance = await   mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`Monog dB connect ${connectionIntance.connection.host}`)
   } catch (error) {
    console.log(`mongog db connection Error`,error);
    process.exit(1)
   }
}  


export default connectDB;