const Transaction = require('../models/transactionModel');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apiFeatures');





// Create new transaction => /api/v1/transaction/new 
exports.createTransaction = catchAsyncErrors(async (req, res, next) => {

        req.body.user = req.user.id;
        const updatedBalance = Number(req.user.currentBalance) + Number(req.body.amount);

        if (updatedBalance < 0) {
            return next(new ErrorHandler("You don't have enough balance", 400));
        }
    
        const transaction = await Transaction.create(req.body);
        const user = await User.findByIdAndUpdate(req.user.id, {currentBalance: Number(updatedBalance)});
        user.currentBalance = Number(updatedBalance);

        res.status(201).json({
            success: true,
            transaction,
            user
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




// Delete transaction => /api/v1/transaction/:id 
exports.deleteTransaction = catchAsyncErrors(async (req, res, next) => {

    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
        return next(new ErrorHandler("Transaction not found", 404));
    }

    const allTransaction = await Transaction.find({user: req.user.id});

    if (!allTransaction) {
        return next(new ErrorHandler("Transaction not found", 404));
    }

    await transaction.remove();

    res.status(200).json({
        success: true,
        message: "Transaction is deleted",
        transactions: allTransaction,
        user: req.user

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




exports.getChartData = catchAsyncErrors(async (req, res, next) => {

        // date last week
        const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

        // get weekly data of each day
        let transactions = await Transaction.find({
            $and: [
              { user: req.user.id },
              {createdAt: {
                $gte: lastWeek,
                $lte: new Date()
                }}
            ]
        });

        {
            $and: [
              { user: req.user.id },
              {createdAt: {
                $gte: lastWeek,
                $lte: new Date()
                }}
            ]
        }

        

        //sort weeklyData in an object date wise (but not time wise)

        let weeklyData = {};
        for (let i = 0; i < transactions.length; i++) {
            let date = transactions[i].createdAt.toISOString().slice(0, 10);
            if (weeklyData[date]) {
                weeklyData[date].push(transactions[i]);
            } else {
                weeklyData[date] = [transactions[i]];
            }
        }


        // sum of amounts of each date

        for (const [key, value] of Object.entries(weeklyData)) {
            let sum = 0;
            for (let i = 0; i < value.length; i++) {
                sum += value[i].amount;
            }
            weeklyData[key] = sum;
        }

    
        res.status(201).json({
            success: true,
            transaction: weeklyData,
        })
});




//  Fetch all transaction details => /api/v1/transactions/
exports.getAllTransactions = catchAsyncErrors(async (req, res) => {

    const transactionCount = await Transaction.countDocuments();
    
    const transactions = await Transaction.find({user: req.user.id}).sort({createdAt: -1});

    res.status(201).json({
        success: true,
        transaction: transactions,
        transactionCount
    })

});