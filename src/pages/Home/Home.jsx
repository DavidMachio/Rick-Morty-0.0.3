import "./Home.css"
import { NavLink } from "react-router-dom";

const Home = () => {

  return (
    <main className="home">
      <p className="description">¡Bienvenido a nuestra emocionante aventura en el multiverso de Rick & Morty! Nuestra aplicación te brinda acceso a una amplia colección de personajes de esta icónica serie de animación. Explora el catálogo completo de personajes o utiliza nuestra herramienta de búsqueda para encontrar a tus favoritos por nombre. Sumérgete en el hilarante y alocado mundo de Rick, Morty y sus amigos, y descubre detalles divertidos y curiosidades sobre los personajes que hacen que esta serie sea tan especial.</p>
      <NavLink className="view" to="/seeker">Ver personajes</NavLink>
      <img src="https://www.da-files.com/contests/2015/rick-and-morty/img/img-ram-portal.png" alt="Imagen de Rick y Morty" />
    </main>
  )
};

export default Home;