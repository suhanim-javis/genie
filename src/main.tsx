import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChatEmbed from './embed/ChatEmbed'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/embed/chat' element={<ChatEmbed />} />
    </Routes>
  </BrowserRouter>
)
