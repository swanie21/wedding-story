import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Meta } from '../components/Meta';
import { Nav } from '../components/Nav';
import styles from '../styles/Home.module.scss';

const Home: React.FunctionComponent = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  let resizeWindow = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <>
      <Meta canonical="/home" />
      <div className={styles.container}>
        <Nav />
        <main className={styles.home}>
          <Confetti
            colors={['#7400B8','#6930C3','#5E60CE','#5390D9','#4EA8DE','#56CFE1','#64DFDF','#72EFDD','#80FFDB']}
            height={height}
            width={width}
          />
          <h1 className={styles.title}>Drew & Kirsten</h1>
          <h2>Saturday, August 7th 2021</h2>
          <h2>6 o'clock evening ceremony with reception to follow</h2>
        </main>
      </div>
    </>
  );
};

export default Home;
