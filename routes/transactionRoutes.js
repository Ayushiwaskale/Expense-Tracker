const express = require("express");
const{
    addTransaction,
    getAllTransaction,
    editTransaction,
    deleteTransaction,
}= require("../controllers/transactionctrl");

//route object
const router = express.Router();

//rotes
//add transaction
router.post("/add-transaction",addTransaction);

//Edit transection POST MEthod
router.post("/edit-transaction", editTransaction);
//Delete transection POST MEthod
router.post("/delete-transaction", deleteTransaction)

//get transaction
router.post("/get-transaction",getAllTransaction);

module.exports = router;