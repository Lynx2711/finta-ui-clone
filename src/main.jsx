import { BrowserRouter, Routes, Route } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './Page.jsx'
import Hack from './hacks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
         <Routes>
              <Route path='/home' element={<Page />}/>
              <Route path='/hacks' element={<Hack />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
