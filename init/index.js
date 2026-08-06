const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
.then(() => {
    console.log("connection successful.");
})
.catch((err) => {
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({       // Adding owner to all the listings
        ...obj,
        owner: "6a68836ad9ef23a24d9e2126"
    }));
    await Listing.insertMany(initData.data);
    console.log("Data is initialized");
}

initDB();