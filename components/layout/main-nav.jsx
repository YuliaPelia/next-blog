import Link from "next/link";
import Logo from "./logo";
import classes from "./main-nav.module.css";
import { useState } from 'react';

function MainNav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className={classes.header}>
            <div className={classes.burger} onClick={toggleMenu}>
                <div className={menuOpen ? `${classes.line} ${classes.lineOpen}` : classes.line}></div>
                <div className={menuOpen ? `${classes.line} ${classes.lineOpen}` : classes.line}></div>
                <div className={menuOpen ? `${classes.line} ${classes.lineOpen}` : classes.line}></div>
            </div>
            <Link href="/">
                <Logo />
            </Link>
            <nav className={`${classes.nav} ${menuOpen ? classes.open : ""}`}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav;