import React, { useContext, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Card.css';

// Context
import {ContextGlobal} from './utils/global.context';

function Card({ name, username, id }) {
  const {favDentistsProvider} = useContext(ContextGlobal);

  const addFav = (state, action) => {
    const dentists = JSON.parse(localStorage.getItem('favDentists')) || [];
    const usernameLocalStorage = dentists.find(
      (dentist) => dentist.username === action.payload.username,
    );
    switch (action.type) {
      case 'CHECK_FAV':
        if (usernameLocalStorage) {
          return { added: true };
        }
        return { added: false };
      case 'ADD_FAV':
        dentists.push(action.payload);
        localStorage.setItem(
          'favDentists',
          JSON.stringify(dentists),
        );
        alert(`username: ${action.payload.username} added to favorites`);
        favDentistsProvider.setFavDentists(dentists);
        return { added: !state.added };
      case 'REMOVE_FAV':
        dentists.splice(dentists.indexOf(action.payload), 1);
        localStorage.setItem(
          'favDentists',
          JSON.stringify(dentists),
        );
        alert(`username: ${action.payload.username} removed from favorites`);
        favDentistsProvider.setFavDentists(dentists);
        return { added: !state.added };
      default:
        throw new Error();
    }
  };

  const [fav, dispatch] = useReducer(
    addFav,
    {
      added: false,
    },
  );

  useEffect(() => {
    dispatch({ type: 'CHECK_FAV', payload: { name, username, id } });
  }, [id, name, username]);

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="dentist" id="doctor" />
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <button
        type="button"
        onClick={() => {
          if (fav.added) {
            dispatch({ type: 'REMOVE_FAV', payload: { id, name, username } });
          } else {
            dispatch({ type: 'ADD_FAV', payload: { id, name, username } });
          }
        }}
        className="favButton"
      >
        { fav.added === true ? '⭐️' : '☆' }
      </button>
    </div>
  );
}

export default Card;
