const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});





// Index Route
router.get("/", wrapAsync(listingController.index));

// New Route
router.get("/new",isLoggedIn, listingController.renderNewForm);

// Show Route 
router.get("/:id", wrapAsync( listingController.showListing));

// Create Route
router.post("/",isLoggedIn,validateListing,upload.single("listing[image]"),  wrapAsync(listingController.createListing));

// Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

// Update Route
router.put("/:id",isLoggedIn,isOwner,upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing));

// Delete Route
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));

/*
Test route only 
app.get("/testlisting", async (req, res) => {
    let sampleListing = new Listing({
        title: "My new Villa",
        description: "By the beach",
        price: 1200,
        location: "Panji, Goa",
        country: "India",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("succesful testing");
});
*/

module.exports = router;