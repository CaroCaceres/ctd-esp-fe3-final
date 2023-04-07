import React, {useContext} from 'react';

// Components
import Card from '../Components/Card';

//Context
import {ContextGlobal} from '../Components/utils/global.context';

// Styles
import './Favs.css';

function Favs() {
  const {favDentistsProvider, themeProvider} = useContext(ContextGlobal);

  return (
    <div className={`fav-main ${themeProvider.theme.value}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentistsProvider.favDentists.map((user) => (
          <Card id={user.id} name={user.name} username={user.username} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default Favs;
