import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Card.css";

// Utils
const uuidGenerator = ({ name, username, id }) => {
  return `${username}-${id}-${name}`;
}



const Card = ({ name, username, id }) => {
  const addFav = (state, action) => {
    // Aqui iria la logica para agregar la Card en el localStorage ✅
    const dentists = JSON.parse(localStorage.getItem("favsDentists")) || [];
    const username = dentists.find(
      (dentist) => dentist.username === action.payload.username
    );
    switch (action.type) {
      case "CHECK_FAV":
        if (username) {
          return { added: true };
        }
        return { added: false };
      case "ADD_FAV":
        dentists.push(action.payload);
        localStorage.setItem(
          "favsDentists",
          JSON.stringify(dentists)
        );
        alert(`username: ${action.payload.username} added to favorites`);
        return { added: !state.added };
      case "REMOVE_FAV":
        dentists.splice(dentists.indexOf(action.payload), 1);
        localStorage.setItem(
          "favsDentists",
          JSON.stringify(dentists)
        )
        alert(`username: ${action.payload.username} removed from favorites`);
        return { added: !state.added };
      default:
        throw new Error();
    }
  }

  const [fav, dispatch] = useReducer(
    addFav,
    {
      added: false
    }
  )

  useEffect(() => {
    dispatch({ type: "CHECK_FAV", payload: { name, username, id } });
  }, []);

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id ✅ */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle ✅ */}
      <img src={"/images/doctor.jpg"} alt="dentist" id="doctor" />
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage ✅ */}
      <button onClick={() => {
        if (fav.added) {
          dispatch({ type: "REMOVE_FAV", payload: { id, name, username } });
        } else {
          dispatch({ type: "ADD_FAV", payload: { id, name, username } });
        }
        // Recarga la pagina cada vez que se agrega o elimina un favorito
        window.location.reload();
      }} className="favButton">{ fav.added === true ? '⭐️' : '☆' }</button>
    </div>
  );
};

export default Card;
