import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();    


connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`App listnen on ${PORT}`)
        app.on((error)=>{
        throw error
        })
    })
})
.catch((error)=>{
   console.log(`server running error `)
})
// const app = express();  

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log(`Error: ${error}`);
//       throw error;
//     });

//     app.get("/", (req, res) => {
//       res.send("Eng Javed");
//     });

//   } catch (error) {
//     console.error(error);
//   }
// })();

// app.listen(process.env.PORT || 5000, () => {
//   console.log(`The server is listening on port ${process.env.PORT}`);
// });
