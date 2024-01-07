const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const returnbookSchema = new Schema (
{
    bookName: {
        type: String,
        required: true,
       },
       memberID: {
        type: Number,
        required: true,
       },
       issuedDate: {
        type: Date,
        required: true,
       },
       dueDate: {
        type: Date,
        required: true,
       } 
},
{ timestamps: true }
);
module.exports = mongoose.model("returnbook", returnbookSchema);