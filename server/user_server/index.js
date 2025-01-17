require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./view/user");
const userPositionRoute = require("./view/userPosition");
const userRoleRoute = require("./view/userRole");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/userPosition", userPositionRoute);
app.use("/api/userRole", userRoleRoute);

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Connected to userDB`);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`userDB Error:`, error);
  });
