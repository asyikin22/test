import React, { useState } from 'react'
import axios from 'axios'
import './Create.scss'
import { useNavigate, Link } from 'react-router-dom';

const Create = ({ addBook }) => {

const [book, setBook] = useState({
    title: "",
    author: "",
    fiction: "",
    genre: "",
    gender: "",
    origin: "", 
    language: "",
    pages: "",
    YearPublished: "",
})

const navigate = useNavigate();

function handleChange(event) {
  setBook(prev => ({ ...prev, [event.target.name]: event.target.value }));
}

async function handleClick(event) {
  event.preventDefault();
  const bookData = {
    ...book,
    pages: book.pages ? parseInt(book.pages, 10) : null,
    YearPublished: book.YearPublished ? parseInt(book.YearPublished, 10) : null,
  };
  await addBook(bookData);
  navigate("/");
}

  return (
    <div className="form">
      <h1>Insert new book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='Title' />
      <input type="text" placeholder='author' onChange={handleChange} name='Author' />
      <input type="text" placeholder='fiction' onChange={handleChange} name='Fiction' />
      <input type="text" placeholder='genre' onChange={handleChange} name='Genre' />
      <input type="text" placeholder='gender' onChange={handleChange} name='Gender' />
      <input type="text" placeholder='origin' onChange={handleChange} name='Origin' />
      <input type="text" placeholder='language' onChange={handleChange} name='Language' />
      <input type="number" placeholder='pages' onChange={handleChange} name='Pages' />
      <input type="number" placeholder='year published' onChange={handleChange} name='YearPublished' />

      <button onClick={handleClick} > Add Book</button>
      <button><Link to="/">Cancel</Link></button>
    
    </div>
  )
} 

export default Create
