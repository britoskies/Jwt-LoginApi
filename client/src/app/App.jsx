import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "../views/login/Login";
import Content from "../views/content/Content";
import './App.css'

function App() {

  const [result, setResult] = useState({
    message: '',
    hasSucceeded: false
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Content message={result.message}/>} />
        <Route path="login" element={<Login setResult={setResult}/>} />
      </Routes>

    </div>
  )
}

export default App
