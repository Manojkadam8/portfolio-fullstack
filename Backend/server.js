import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cors from "cors";
import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
app.use(cors());

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});