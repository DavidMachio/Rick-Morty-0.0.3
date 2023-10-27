import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce"
import "./Seeker.css"
import axios from "axios";


const Seeker = () => {
  const [inputValue, setInputValue] = useState("");
  const [value] = useDebounce(inputValue, 700);
  const [characters, setCharacters] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [error, setError] = useState(false);

  const searchCharacter = async () => {
    setError(false)
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character?name=${value}`)
      console.log(res)
      setCharacters(res.data.results);
    } catch (error) {
      setError(true)
    }

  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPageNum(pageNum + 1);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    searchCharacter();


  }, [value, pageNum])




  return (
    <main>
      <div className="search">
        <input type="text"
          placeholder="Character name..."
          value={inputValue}
          onInput={(ev) => setInputValue(ev.target.value)} />
      </div>
      {error ? (
        <div className="error">
          <img className="not-exist" src="https://i.redd.it/2e99wgj1lei31.jpg" alt="Paceholder Rick&Morty" />
          <h2>No existe este personaje</h2>
        </div>
      ) : (
        <section className="results">
          {characters.map((char) => (
            <div key={char.id} className="card">
              <h3>{char.name}</h3>
              <div className="dates">
                <img src={char.image} alt={char.name} />
                <h4> Origen: {char.origin.name}</h4>
                <h4>Especie: {char.species}</h4>
                <h4>Estado: {char.status}</h4>
              </div>
            </div>

          ))}


        </section>
      )}
    </main>
  )
}
export default Seeker;