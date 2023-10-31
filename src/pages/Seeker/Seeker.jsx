import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import "./Seeker.css";
import axios from "axios";

const Seeker = () => {
  const [inputValue, setInputValue] = useState("");
  const [value] = useDebounce(inputValue, 700);
  const [characters, setCharacters] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState(false);

  const searchCharacter = async () => {
    setError(false);
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?name=${value}&page=${pageNum}`
      );
      if (!res.data.error) {
        setCharacters([...characters, ...res.data.results]);
        window.addEventListener("scroll", handleScroll);
      }
      console.log(res);

    } catch (error) {
      //setError(true);
    }
  };
  const searchOneCharacter = async () => {
    setError(false);
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?name=${value}`
      );
      console.log(res);
      setCharacters([...res.data.results]);
    } catch (error) {
      setError(true);
    }
  };
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY + 100 >= document.documentElement.offsetHeight) {
      console.log("Hola");
      setPageNum(pageNum + 1);
    }
  };
  const handleSearchClick = () => {
    searchOneCharacter();
  };

  useEffect(() => {
    searchCharacter();
  }, [value, pageNum]);


  return (
    <main>
      <div className="search">
        <input
          type="text"
          placeholder="Character name..."
          value={inputValue}
          onInput={(ev) => setInputValue(ev.target.value)} />
        <button className="filter" onClick={handleSearchClick}>Buscar</button>
      </div>
      {error ? (
        <div className="error">
          <img
            className="not-exist"
            src="https://i.redd.it/2e99wgj1lei31.jpg"
            alt="Paceholder Rick&Morty"
          />
          <h2>No existe este personaje</h2>
        </div>
      ) : (
        <section className="results">
          {characters.map((char) => (
            <div key={char.id} className="card">

              <h2 className="name">{char.name}</h2>


              <div className="card-dates">
                <img src={char.image} alt={char.name} />
                <div className="dates">
                  <h3>{char.status}</h3>
                  <h4><span>Specie:</span> {char.species}</h4>
                  <h4><span>Origen:</span> {char.origin.name}</h4>
                  <h4><span>Location:</span> {char.location.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};
export default Seeker;