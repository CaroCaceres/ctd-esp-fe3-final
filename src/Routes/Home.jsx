import { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dataProvider } = useContext(ContextGlobal);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dataProvider.setData(data))
  }, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards ✅ */
          dataProvider.data.map((user) => (
            <Card id={user.id} name={user.name} username={user.username} key={user.id}/>
          ))
        }
      </div>
    </main>
  )
}

export default Home