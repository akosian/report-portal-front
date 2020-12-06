import css from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (<nav className={css.navbar}>
        <div className={css.item}>
            <NavLink to={'/testruns'} activeClassName={css.active}>Test Runs</NavLink>
        </div>
        <div className={css.item}>
            <NavLink to={'/tests'} activeClassName={css.active}>Tests</NavLink>
        </div>
        <div className={css.item}>
            <NavLink to={'/users'} activeClassName={css.active}>Users</NavLink>
        </div>
    </nav>)
}

export default NavBar