import React from 'react';
import styles from './Home.module.scss';



const Home: React.FC = () => {
    return (
        <div role='main' className={styles.homeHeader}>
            <h1>Welcome to the product Home page!</h1>
            <h3>My name is Angel and I&apos;m looking forward to work with you!</h3>
        </div>
    );
};

export default Home;