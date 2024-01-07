const ReturnBook = require("../models/returnbook");
const mongoose = require("mongoose");

//get all return books
const getReturnBook = async (req, res) => {
    try {
        const returns = await ReturnBook.find({}).sort({ createdAt: -1 });
        res.status(200).json(returns);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//post return book
const addReturnBook = async (req, res) => {

    const{
        bookName,
        memberID,
        issuedDate,
        dueDate,
    } = req.body;

    try{
        const returns = await ReturnBook.create({
            bookName,
            memberID,
            issuedDate,
            dueDate,
        });
        res.status(200).json(returns);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getReturnBook,
    addReturnBook
}