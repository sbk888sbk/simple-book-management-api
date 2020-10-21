This is a very simple book management REST api using JSON file as backend source. Contains only 5 endpoints

- Validations are not yet implemented
- Error handling is not yet implemented, so requests has to be made exactly as defined below
- Whenever we have to edit/add data to backend, we are reading data from JSON file and writing to JSON file synchronously using fs module

1. Get All Books
   {
   RequestType : GET,
   Path : /
   }

2. Get Book :-
   {
   RequestType : GET,
   Path : /:id
   }

3. Add New Book :-
   {
   RequestType : PUT,
   Path : /,
   Body : {
        "book" : 
            { 
                id:Number,
                title: String,
                author:String,
                link: String
            }
        }
   }

4. Edit Book :-
   {
   RequestType : POST,
   Path : /:id,
   Body : {
       "book" : 
            { 
                id:Number,
                title: String,
                author:String,
                link: String
           }
    }
   }

5. Delete Book :-
   {
   RequestType : DELETE,
   Path : /:id
   }
