const fs = require('fs')


const getBooksData = () => {
    let rawdata = fs.readFileSync(`${__dirname}/../models/books.json`);
    return JSON.parse(rawdata).books;
}
const writeBooksData = (books)=> {
     fs.writeFileSync(`${__dirname}/../models/books.json`,`${JSON.stringify({'books':books})}`)
}
exports.getbooks =  (req, res, next) => {
    books = getBooksData();
    res.send({
        "status":200,
        data : books
    })
}

exports.getbook = (req, res, next) => {
    const id = +req.params.id;
    let book;

    let books = getBooksData()
    for (var i = 0; i < books.length; i++){
        if (books[i].id === id){
            book = books[i];
            break;
        }
      }
    if(book){
            res.status(200).send(
                {
                'status':'scuccess',
                book
                });
        } else {
            res.status(404).send(
                {
                'status':404,
                'message':'No book found'
                });
        }

}

let sampleBook = (id, data) =>{
    let newBook = { id:99999999, title: '', author: '', link: ''}
    newBook.id = id;   
    newBook.title = data.title?data.title:newBook.title;
    newBook.author = data.author?data.author:newBook.author;
    newBook.link = data.link? data.link: newBook.link;
    return newBook;
}

exports.addBook = (req, res, next) => {
    let books = getBooksData()
    let reqData = req.body.book;
    newBook = sampleBook(req.body.book.id, req.body.book)

    books.push(newBook);
    console.log("books",books)

    writeBooksData(books)

        res.status(200).send({
            'status':'success',
            "data":newBook
        })
    

}

exports.editBook = (req,res,next) => {
    let id = +req.params.id
    let book = sampleBook(id, req.body.book)

    let books = getBooksData();
    for (var i = 0; i < books.length; i++){
        if (books[i].id === id){
            books[i] = book;
            console.log("Books:", books)
            break;
        }
      }

    writeBooksData(books) 
    res.status(200).send({
        'status':'success',
        book
    })
}

exports.deleteBook = (req,res,next) => {
    let id = +req.params.id
    let books = getBooksData()
    let temp=[];
    for (var i = 0; i < books.length; i++){
        if (books[i].id === id){
            console.log("ues")
            temp = temp.concat(books.slice(0,i), books.slice(i+1, books.length))
            books=temp
            break;
        }
      }
    writeBooksData(books)
    res.status(200).send({
        'status':'success',
        "message" : 'Book deleted successfully'
    })
}

