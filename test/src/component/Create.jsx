import React, { useState } from 'react'
import axios from 'axios'
import './Create.scss'
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {

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
  event.preventDefault()
  try {
    await axios.post("http://localhost:3000/books/", book)
    navigate("/")
  } catch (error) {
    console.log(error)
  }
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
