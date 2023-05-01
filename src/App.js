import './index.css';
import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from './component/BookList';


function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedbooks = [
            ...books,
            {id: Math.round(Math.random( ) * 999), title}
        ];
        setBooks(updatedbooks);
    };

    return ( 
    <div className='app'>
        <BookList books={books} />
        <BookCreate onCreate={createBook}/>
    </div>
    );
}

export default App;