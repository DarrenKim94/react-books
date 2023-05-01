import { useState } from "react";
import BookCreate from "./component/BookCreate";


function App() {
    const [books, setBook] = useState([]);

    const createBook = (title) => {
        console.log('Add', title)
    };

    return ( 
    <div>
        <BookCreate onCreate={createBook}/>
    </div>
    );
}

export default App;