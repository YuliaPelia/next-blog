import MainNavigation from "./main-nav";
import classes from "./layout.module.css";

function Layout({ children }) {
    return (
        <>
            <MainNavigation />
            <main className={classes.main}>
                {children}
            </main>
        </>
    );
}

export default Layout;