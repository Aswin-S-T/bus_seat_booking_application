const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    comment: { type: String },
    rating: { type: String },
});

const User = mongoose.model("FeedBack", feedbackSchema);
module.exports = User;
