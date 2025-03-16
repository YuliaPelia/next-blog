import classes from "./logo.module.css";

function Logo() {
    return (
        <div className={classes.logo}>
            Yuki's <span className={classes.dragonEmoji}>🐉</span> Blog
        </div>
    );
}

export default Logo;