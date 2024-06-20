import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const Update = () => {

  const [book, setBook] = useState({
    title: "",
    author: "",
    fiction: "",
    genre: "",
    gender: "",
    origin: "", 
    language: "",
    pages: "",
    yearPublished: "",
  })

  const navigate = useNavigate()
  const { id } = useParams()     //get book ID from URL

  useEffect(()=> {
    async function fetchBook() {
      try {
        console.log(`Fetching book with ID: ${id}`)
        const response = await axios.get(`http://localhost:3000/books/${id}`)
        setBook(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBook()
  }, [id])

  function handleChange(event) {
    const { name, value } = event.target
    setBook(prev => ({ ...prev, [name]: value }));
  }
    console.log(book)

    async function handleEditClick(event) {
      event.preventDefault()
      try {
        await axios.put(`http://localhost:3000/books/${id}`, book)
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="form">
      <h1>Update book</h1>
      <input type="text" placeholder='title' value={book.title} onChange={handleChange} name='title' />
      <input type="text" placeholder='author' value={book.author} onChange={handleChange} name='author' />
      <input type="text" placeholder='fiction' value={book.fiction} onChange={handleChange} name='fiction' />
      <input type="text" placeholder='genre' value={book.genre} onChange={handleChange} name='genre' />
      <input type="text" placeholder='gender' value={book.gender} onChange={handleChange} name='gender' />
      <input type="text" placeholder='origin' value={book.origin} onChange={handleChange} name='origin' />
      <input type="text" placeholder='language' value={book.language} onChange={handleChange} name='language' />
      <input type="number" placeholder='pages' value={book.pages} onChange={handleChange} name='pages' />
      <input type="number" placeholder='year published' value={book.yearPublished} onChange={handleChange} name='yearPublished' />

      <button onClick={handleEditClick} > Update Book</button>
      <button><Link to="/">Cancel</Link></button>
    
    </div>
  )
}

export default Update