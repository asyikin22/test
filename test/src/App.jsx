import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from "./pages/Books"
import Analytics from "./pages/Analytics"
import Search from "./pages/Search"
import Login from "./pages/Login"

function App() {

  return (<>
  
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Analytics" element={<Analytics />}/>
          <Route path="/Search" element={<Search />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
      
    </> )
}

export default App
