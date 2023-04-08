import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from './utils/Theme.context'
import { useContext } from 'react'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className={styles.navbar}>
        <div className={styles.links}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/favs">Favs</Link>
            </li>
          </ul>
        </div>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={themeContext.changeTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar