import React from 'react'
import Navbar from '../component/Navbar'
import Table from '../component/Table'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Books.scss'
import { Link } from 'react-router-dom'

//Fetch data from mysql DB
const Books = () => {

  const [books, setBooks] = useState([])

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
 
  return ( <>
    <Navbar />
     <button>
        <Link to="/create">Add New Book</Link>
     </button>

    <Table books={books} />
  </>)
}

export default Books