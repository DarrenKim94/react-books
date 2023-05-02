import './index.css';
import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from './component/BookList';


function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedbooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }

            return book
        });
        setBooks(updatedbooks);
    };

    const deleteBookById = (id) => {
        const updatedbooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedbooks);
    };

    const createBook = (title) => {
        const updatedbooks = [
            ...books,
            {id: Math.round(Math.random( ) * 999), title}
        ];
        setBooks(updatedbooks);
    };

    return ( 
    <div className='app'>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>
    );
}

export default App;