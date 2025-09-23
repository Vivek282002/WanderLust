const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");


module.exports.isLoggedIn = (req, res, next) =>{
    // Authentication -> // Check if user is authenticated (Passport adds req.isAuthenticated())
    if(!req.isAuthenticated() ) {
        // req.path -> /new this is the path where user got error of not logged in, req.originalUrl -> /listings/new  it store what user wants to access
        // Save the URL the user originally wanted to access
        req.session.redirectUrl = req.originalUrl;
        req.flash("errorMsg", "you must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        // Store redirectUrl in res.locals (available in templates / views)
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("errorMsg", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }

    next();
};

module.exports.validateListing = (req, res, next) => {
    // validateListing
    //const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
       if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
       } else {
        next();
       }
};

module.exports.validateReview = (req, res, next) => {
    // validateReview
    // const validateReview = (req, res, next) => {
        let {error} = reviewSchema.validate(req.body);
           if(error) {
            let errMsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(400, errMsg);
           } else {
            next();
           }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("errorMsg", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }

    next();
};


