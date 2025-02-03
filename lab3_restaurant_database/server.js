require('dotenv').config();  // This loads the .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;  // This loads the Mongo URI from .env

if (!MONGO_URI) {
    console.error("❌ MONGO_URI is missing in the .env file!");
    process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});



