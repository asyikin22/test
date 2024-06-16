import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

//Middleware to parse JSON request bodies
app.use(express.json())

//Middleware to allow cross-origin requests from front end
app.use(cors())

//Create GET request fo endpoint '/'
app.get("/", (req, res) => {
    res.json('This coming from backend serverrr')
})

//create connection to mysql db
const db =mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//Fetch data from mysql db
app.get("/books", (req, res) => {
    const q = "SELECT * FROM goodreads"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Add new book to DB
app.post("/books", (req, res) => {
    const q = "INSERT INTO goodreads(`Title`, `Author`, `Fiction`, `Genre`, `Gender`, `Origin`, `Language`, `Pages`, `Year Published`) VALUES (?,?,?,?,?,?,?,?,?)"
    const values = [
        req.body.Title,
        req.body.Author,
        req.body.Fiction,
        req.body.Genre,
        req.body.Gender,
        req.body.Origin,
        req.body.Language,
        req.body.Pages,
        req.body.YearPublished
    ]

    db.query(q, values, (err, data) => {
        if(err) return res.json(err)
            return res.json("New book added!")
    })
})

//Delete book from database
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM goodreads WHERE ID = ?"

    db.query(q, [bookId], (err, data) => {
        if(err) return res.json(err)
            return res.json("Book has been exterminated lol")
    })
})


//Update book from database
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id
    const q = "UPDATE goodreads SET `Title`=?, `Author`=?, `Fiction`=?, `Genre`=?, `Gender`=?, `Origin`=?, `Language`=?, `Pages`=?, `Year Published`=? WHERE id = ?"

    const values = [
        req.body.Title,
        req.body.Author,
        req.body.Fiction,
        req.body.Genre,
        req.body.Gender,
        req.body.Origin,
        req.body.Language,
        req.body.Pages,
        req.body.YearPublished
    ]

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been updated")
    })
})


app.listen(3000, ()=> {
    console.log("connected to backend at port 3000...")
})