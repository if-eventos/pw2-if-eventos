import Menu from "./components/Menu"
import { AuthProvider } from "./context/AuthContext"
import './App.module.css'

function App() {

  return (
    <AuthProvider>
      <Menu />
    </AuthProvider>
  )
}

export default App
