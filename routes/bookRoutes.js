const express = require('express');
const router = express.Router();
const bookController = require(`${__dirname}/../controllers/bookController`)

router.get('/',bookController.getbooks)
router
.get('/:id',bookController.getbook)
.post('/:id',bookController.editBook)
.put('/',bookController.addBook)
.delete('/:id',bookController.deleteBook)


module.exports = router;  