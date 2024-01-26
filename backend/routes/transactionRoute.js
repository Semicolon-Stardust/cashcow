const express = require("express");
const { 
    getAllTransactions, 
    getChartData,
    getSingleTransaction, 
    createTransaction, 
    updateTransaction, 
    deleteTransaction 
} = require("../controllers/transactionController");
const {isUserAuthenticated, authorizeRoles} = require("../middleware/auth");


const router = express.Router();


router.route("/transactions").get(isUserAuthenticated, getAllTransactions);
router.route("/chart").get(isUserAuthenticated, getChartData);
router.route("/new").post(isUserAuthenticated, createTransaction);
router.route("/:id")
    .put(isUserAuthenticated, updateTransaction)
    .delete(isUserAuthenticated, deleteTransaction)
    .get(getSingleTransaction);


module.exports = router;