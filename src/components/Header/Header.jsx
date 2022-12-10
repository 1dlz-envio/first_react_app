import React from 'react';
import classes from './Header.module.css'

const Header = () => {
      return (
            <header className={`${classes.header} ${classes.borders}`}>
                  <img src='https://i.picsum.photos/id/1068/200/200.jpg?hmac=fZthgo1dc9rYSPL0GF4oEqYm2dpTII6Dz2J06qYNqGw' alt='logo'>
                  </img>
            </header>
      )
}

export default Header;