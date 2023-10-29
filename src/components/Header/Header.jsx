import { useState } from "react";
import "./Header.css"

const Header = ({ action }) => {

  const [button, setButton] = useState(true);

  const moveButton = () => {
    button == true ? setButton(false) : setButton(true)
  }



  return (
    <header>
      <img src="./Rick-and-Morty.png" alt="" />
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/all">All</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
        </ul>
        <div className="button-theme" onClick={moveButton}>
          <button className={button == true ? "sun" : "moon"} onClick={action}></button>
          <p className="sol">☀️</p>
          <p className="luna">🌑</p>
        </div>
      </nav>

    </header>
  )
}
export default Header;


/* className={theme == true ? "theme-day" : "theme-night"}

const [dia, setDia] = useState(true)
  const changeDia = () => {
    dia == true ? setDia(false) : setDia(true)
  }


*/