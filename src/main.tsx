import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Layout';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}/>
          <Route path="/about" element= {<></>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
