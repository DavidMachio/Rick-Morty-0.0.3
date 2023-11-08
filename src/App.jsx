
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [theme, setTheme] = useState(true)

  const changeTheme = () => {
    theme == true ? setTheme(false) : setTheme(true)
  }

  return (
    <div className={theme == true ? "day" : "night"}>
      <Header action={changeTheme} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
