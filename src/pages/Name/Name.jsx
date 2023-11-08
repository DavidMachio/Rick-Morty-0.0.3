import "./Name.css"
import { useState } from "react";


const Name = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <main className="main-name">
      <div className="content">
        <input className="enter-name" type="text" placeholder="enter your text..." onInput={(ev) => setInputValue(ev.target.value)} />
        <div className="sticker">
          <img src="https://juststickers.in/wp-content/uploads/2020/07/rick-and-morty.png" alt="Foto de Rick and Morty" className="img-sticker" />
          <h1 className="your-name">{inputValue}</h1>
        </div>
      </div>
    </main>
  )
};

export default Name;