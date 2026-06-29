import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { UserDataProvider } from './context/UserDataContext.jsx'
import { UserLoginProvider } from './context/UserLoginContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <UserDataProvider>
      <UserLoginProvider>
        <App />
      </UserLoginProvider>
    </UserDataProvider>
  </BrowserRouter>
)
