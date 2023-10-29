import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Seeker from './pages/Seeker/Seeker'

const App = () => {
  const [theme, setTheme] = useState(true)

  const changeTheme = () => {
    theme == true ? setTheme(false) : setTheme(true)
  }

  return (
    <div className={theme == true ? "day" : "night"}>
      <Header action={changeTheme} />
      <Seeker />
      <Footer />
    </div>
  )
}

export default App;
