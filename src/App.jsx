import React, { useState } from 'react'
import './App.css'
import BookView from './components/BookView'
import BookSelect from './components/BookSelect.jsx'
import books from './data.js'

function App() {

  const [selectedBook, setSelectedBook] = useState(books[0]);

  const handleClick = (id) => {
    const newBook = books.find((book)=> book.id == id)
    setSelectedBook(newBook)
  }

  return (
    <>
    <BookView selectedBook={selectedBook}/>
    <BookSelect selectedBook={selectedBook} bookArray={books} onClick={handleClick}/>
    </>
  )
}

export default App
