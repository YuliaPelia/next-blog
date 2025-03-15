import Image from 'next/image';

import classes from './Hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="https://res.cloudinary.com/dboiqigz3/image/upload/v1741952909/ivcfr7fxegex0nhhdd0h.png" 
                    alt="An image showing Yulia" 
                    width={300} 
                    height={300} 
                />
            </div>
            <div className={classes.content}>
                <h1>Hi, I'm Yulia <span className={classes.dragonEmoji}>🐉</span></h1>
                <p>
                    I blog about web development - especially frontend frameworks like
                    Angular or React. Join me on this fiery journey through the realm of code!
                </p>
                <div className={classes.dragonScales}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
