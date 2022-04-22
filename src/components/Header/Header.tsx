import { Link } from 'react-router-dom'
import { FC } from 'react'

import styles from './Header.module.scss'

import Logo from '../Logo/Logo'

const Header:FC = () => {
  return (
    <header className={`wrapper ${styles.header}`}>
      <div className={`container padding ${styles.header_container}`}>
        <Logo />

        <ul className={`linkset ${styles.header_linkset}`}>
          <li className="linkset__list-item">
            <Link to='/' className={`linkset__link ${styles.header_linkset_link}`}>Home</Link>
          </li>
          <li className="linkset__list-item">
            <Link to='/result' className={`linkset__link ${styles.header_linkset_link}`}>Result</Link>
          </li>
          <li className="linkset__list-item">
            <Link to='/about' className={`linkset__link ${styles.header_linkset_link}`}>About</Link>
          </li>
          <li className="linkset__list-item">
            <Link to='/contacts' className={`linkset__link ${styles.header_linkset_link}`}>Contact us</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Header
