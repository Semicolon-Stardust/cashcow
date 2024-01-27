const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter transaction name"],
    },
    amount: {
        type: Number,
        required: [true, "Please enter transaction amount"],
        maxLength: [8, "Amount cannot exceed 8 characters"]
    },
    category: {
        type: String,
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
    recurring: {
        type: Boolean,
        default: false
    },
    recurringDate: {
        type: Date,
    },
    recurringType: {
        type: String,
        enum: {
            values: [
                "daily",
                "weekly",
                "monthly",
                "yearly",
            ],
            message: "Please select correct recurring type"
        }
    },
    paymentMethod: {
        type: String,
        required: [true, "Please select payment method for this transaction"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Transaction", transactionSchema);
