const Transaction = require('../models/transactionModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apiFeatures');





// Create new transaction => /api/v1/transaction/new 
exports.createTransaction = catchAsyncErrors(async (req, res, next) => {

        req.body.user = req.user.id;
    
        const transaction = await Transaction.create(req.body);

        res.status(201).json({
            success: true,
            transaction
        })


})





// Update transaction details => /api/v1/transaction/:id   -- ADMIN ONLY
exports.updateTransaction = catchAsyncErrors( async (req, res, next) => {

    let transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
        return next(new ErrorHandler("Transaction not found", 404));
    }

    transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        transaction
    })
})




// Delete transaction => /api/v1/transaction/:id   -- ADMIN ONLY
exports.deleteTransaction = catchAsyncErrors(async (req, res, next) => {

    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
        return next(new ErrorHandler("Transaction not found", 404));
    }

    await transaction.remove();

    res.status(200).json({
        success: true,
        message: "Transaction is deleted"
    })
})





// Fetch single transaction details => /api/v1/transaction/:id
exports.getSingleTransaction = catchAsyncErrors(async (req, res, next) => {
    
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
        return next(new ErrorHandler("Transaction not found", 404));
    }

    res.status(200).json({
        success: true,
        transaction
    })
});




//  Fetch all transaction details => /api/v1/transactions/
exports.getAllTransactions = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 5;
    const transactionCount = await Transaction.countDocuments();
    
    const apiFeature = new ApiFeatures(Transaction.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const transactions = await apiFeature.query;

    res.status(201).json({
        success: true,
        transaction: transactions,
        transactionCount
    })

});