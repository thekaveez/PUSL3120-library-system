const IssuedBook = require("../models/issuedbook");
const mongoose = require("mongoose");

//get all issued book
const getIssuedbook = async (req, res) => {
    try {
        const issued = await IssuedBook.find({}).sort({ createdAt: -1 });
        res.status(200).json(issued); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
 //post a issued book
 const addIssuedbook = async (req, res) => {
    const{
        bookName,
        memberID,
        issuedDate,
        dueDate,
    } = req.body;

    try{
        const issue = await IssuedBook.create({
            bookName,
            memberID,
            issuedDate,
            dueDate,  
        });
        res.status(200).json(issue);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
 };

//get a single issued book
const getSingleissuedbook = async (req, res) => {
    const { id }  = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such issued book" });
      }
      const issue = await IssuedBook.findById(id);

      if (!issue) {
        return res.status(404).json({ msg: "Book not found" });
      }
      res.status(200).json(issue);
};

// update a issued book
const updateIssuedbook = async (req, res) => {
    const { id }  = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such issued book" });
      }

      const issue = await IssuedBook.findByIdAndUpdate({_id: id},{
        ...req.body
      })
      if(!issue){
        return res.status(404).json({error: 'No such issued book'})
    }
    res.status(200).json(issue)
}
module.exports = {
    getIssuedbook,
    addIssuedbook,
    getSingleissuedbook,
    updateIssuedbook
}