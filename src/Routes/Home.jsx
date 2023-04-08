import React from 'react'
import { ContextProvider } from '../Components/utils/Global.context';
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => { 

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        <ContextProvider>
            <Card/>
        </ContextProvider>
      </div>
    </main>
  )
}

export default Home;