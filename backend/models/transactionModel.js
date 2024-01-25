const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter transaction name"],
    },
    description: {
        type: String,
    },
    amount: {
        type: Number,
        required: [true, "Please enter transaction amount"],
        maxLength: [8, "Amount cannot exceed 8 characters"]
    },
    category: {
        type: String,
        required: [true, "Please select category for this transaction"],
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    family: {
        type: mongoose.Schema.ObjectId,
        ref: "Family",
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Transaction", transactionSchema);
