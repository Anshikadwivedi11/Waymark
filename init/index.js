const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  if (!dbUrl) {
    throw new Error("ATLASDB_URL is not defined in your .env file!");
  }
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("Connected to Atlas DB successfully.");
    initDB();
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

  const initDB = async () => {
    try {
        // 1. Find the existing demo user first
        const adminUser = await User.findOne({ username: "demo" });

        if (!adminUser) {
            console.log("User 'demo' was not found.");
            return;
        }

        // 2. Now it is safe to delete old listings
        await Listing.deleteMany({});

        // 3. Add the real user's _id as owner to every listing
        initData.data = initData.data.map((obj) => ({
            ...obj,
            owner: adminUser._id
        }));

        // 4. Insert the 50 listings
        await Listing.insertMany(initData.data);

        console.log("Data successfully initialized with 50 listings!");
    } catch (err) {
        console.error("Error initializing data:", err);
    } finally {
        await mongoose.connection.close();
        console.log("Database connection closed.");
    }
};