import { useState } from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/seeker">All</NavLink>
          </li>
          <li>
            <NavLink to="/name">Name</NavLink>
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