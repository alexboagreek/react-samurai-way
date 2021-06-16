import React from 'react';
import classes from'./Navo.module.css';


const Navbar = () => {
  return <nav className={classes.nav}>
        <div className={classes.item}>
            <a>Company name</a>
        </div>
        <div className={classes.item}>
            <a>Zombies</a>
        </div>
        <div className={classes.item}>
            <a>Weapons</a>
        </div>
        <div className={classes.item}>
            <a>Choose Fighter</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
    </nav>
}
export default Navbar;