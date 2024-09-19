import { BrowserRouter } from "react-router-dom"

import Menu from "./components/Menu"
import { AuthProvider } from "./context/AuthContext"
import { Router } from "./Router"

import './App.module.css'



function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
