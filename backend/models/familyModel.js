const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter family name"],
    },
    description: {
        type: String,
    },
    members: {
        type: Array,
        required: [true, "Please enter family members"],
    },
    category: {
        type: String,
        required: [true, "Please select category for this family"],
    },
    admin:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Family", familySchema);
