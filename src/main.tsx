import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from './Layout';
import './index.css'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import ProductShow from './pages/ProductShow';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element= {<Home/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route
              path="/products/:itemId"
              element={<ProductShow/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
