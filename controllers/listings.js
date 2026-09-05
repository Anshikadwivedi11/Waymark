const Listing = require("../models/listing.js");
const geocoder = require("../geocoder.js");

// Listing --> index route
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports.index = async (req, res) => {
    let { search, category } = req.query;
    search = search?.trim() || "";
    category = category?.trim() || "";

    let query = {};

    // 1. If category is present, add category constraint
    if (category) {
        query.category = category;
    }

    // 2. If search is present, add text matching constraints
    if (search) {
        const escapedSearch = escapeRegex(search);
        const regex = { $regex: escapedSearch, $options: "i" };

        query.$or = [
            { location: regex },
            { description: regex },
            { title: regex },
            { country: regex }
        ];
    }

    // 3. Query MongoDB with dynamic query object
    const allListings = await Listing.find(query);

    res.render("listings/index", { 
        allListings, 
        search, 
        category 
    });
};

// Listing --> New route
module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
};

// Listing --> Show route
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
};

// Listing --> Create listing route
module.exports.createListing = async (req, res, next) => {

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);

    const response = await geocoder.geocode(newListing.location);

    if (response.length === 0) {
        req.flash("error","Location not found. Please enter a valid location.");
        return res.redirect("/listings/new");
    }

    newListing.geometry = {
        type: "Point",
        coordinates: [
            response[0].longitude,
            response[0].latitude
        ]
    };

    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

// Listing --> Edit listing route
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("./listings/edit.ejs", { listing, originalImageUrl });
};

// Listing --> Update listing route
module.exports.updateListing = async (req, res) =>{
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// Listing --> Destroy listing route
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};