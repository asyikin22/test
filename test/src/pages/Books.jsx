import React from 'react'
import Navbar from '../component/Navbar'
import Table from '../component/Table'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Books.scss'
// import Create from '../component/Create'
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Create from "../component/Create"


//Fetch data from mysql DB
const Books = () => {

  const [books, setBooks] = useState([])
  
  //state to control the modal visibility
  const[showCreateForm, setShowCreateForm] = useState(false)


  useEffect(() => {
    const fetchAllBooks = async() => {
      try {
        const res = await axios.get("http://localhost:3000/books")
        console.log(res.data)
        setBooks(res.data)
      } catch (error) {
        console.log("error fetching books:", error)
      }
    }
    fetchAllBooks()
  }, [])

  //Create new book 
  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook])
  }
 

  return ( <>
    <Navbar />
     <button onClick={() => setShowCreateForm(true)}>
      Add New Book
     </button>
    
    <Table books={books} />
    {showCreateForm && (
      <Create 
        onClose={()=> setShowCreateForm(false)}
        onAddBook = {addBook}
      />
    )}
  </>)
}

export default Books