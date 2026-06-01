const  express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const incidentRoutes = require("./routes/incidentRoutes");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running");
});
app.use("/api/incidents", incidentRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

