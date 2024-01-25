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
        default: [],
    },
    admin:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Family", familySchema);
