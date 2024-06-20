import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from "./pages/Books"
import Analytics from "./pages/Analytics"
import Search from "./pages/Search"
import Login from "./pages/Login"
import Create from './component/Create'
import Update from './component/Update'

function App() {

  return (<>
  
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Analytics" element={<Analytics />}/>
          <Route path="/Search" element={<Search />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
      
    </> )
}

export default App
