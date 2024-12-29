
import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

dotenv.config();

// Connect to Database
connectDB();

// Start the server
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
