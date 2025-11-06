import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Layout from './Layout';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<h1>Login Section</h1>} />
          <Route path="/register" element={<h1>Register Section</h1>} />
          <Route path="/cart" element={<h1>this is cart section</h1>} />
          <Route path="/order" element={<h1>this is order section</h1>} />
          <Route path="*" element={<h1>404 Pages</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)