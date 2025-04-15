import app from "./src/app.js";
import { config } from "dotenv";    

config(); // Load environment variables from .env file


app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});