import React, { useContext, useEffect } from 'react';

// Components
import Card from '../Components/Card';

// Context
import { ContextGlobal } from '../Components/utils/global.context';

// Styles
import './Home.css';

function Home() {
  const { dataProvider, themeProvider } = useContext(ContextGlobal);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dataProvider.setData(data));
  }, []);

  return (
    <main className={themeProvider.theme.value}>
      <h1>Home</h1>
      <div className="card-grid">
        {
          dataProvider.data.map((user) => (
            <Card id={user.id} name={user.name} username={user.username} key={user.id} />
          ))
        }
      </div>
    </main>
  );
}

export default Home;
