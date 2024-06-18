import React, { useState } from 'react'
import axios from 'axios'
import './Create.scss'

const Create = ( { onClose, onAddBook }) => {

const [book, setBook] = useState({
    Title: " ",
    Author: " ",
    Fiction: " ",
    Genre: " ",
    Gender: " ",
    Origin: " ", 
    Language: " ",
    Pages: " ",
    YearPublished: " "
})

function handleChange(event) {
    setBook(prev=>({...prev, [event.target.name]: event.target.value}))
}
    async function handleClick (event) {
        event.preventDefault()
        try {
            await axios.post("http://localhost:3000/books", book)
            console.log("submitting book data:", book)
            onAddBook(res.data);
            onClose();
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="form">
        <h1>Add new book</h1>
        <input type="text" placeholder='Title' onChange={handleChange} name="Title" />
        <input type="text" placeholder='Author' onChange={handleChange} name="Author" />
        <input type="text" placeholder='Fiction' onChange={handleChange} name="Fiction" />
        <input type="text" placeholder='Genre' onChange={handleChange} name="Genre" />
        <input type="text" placeholder='Gender' onChange={handleChange} name="Gender" />
        <input type="text" placeholder='Origin' onChange={handleChange} name="Origin" />
        <input type="text" placeholder='Language' onChange={handleChange} name="Language" />
        <input type="text" placeholder='Pages' onChange={handleChange} name="Pages" />
        <input type="text" placeholder='Year Published' onChange={handleChange} name="yearPublished" />
        
        <button onClick={handleClick}> Add Book </button>
        <button onClick={onClose}>Cancel</button>
    </div>
  )
}

export default Create
