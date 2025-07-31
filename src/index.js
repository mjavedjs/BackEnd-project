// index.js

import dotenv from "dotenv";
dotenv.config(); // Load environment variables first

import connectDB from "./db/index.js"; // MongoDB connection
import app from "./app.js"; // Express app configuration

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ App listening on port ${PORT}`);
    });

    // Optional: Catch server errors
    app.on("error", (error) => {
      console.error("❌ App error:", error);
      throw error;
    });
  })
  .catch((error) => {
    console.error("❌ Server failed to start:", error);
  });
