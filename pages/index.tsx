import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Meta } from '../components/Meta';
import { Nav } from '../components/Nav';
import styles from '../styles/Home.module.scss';

const getWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Home: React.FunctionComponent = () => {
  const size = getWindowSize();

  return (
    <>
      <Meta canonical="/home" />
      <div className={styles.container}>
        <Nav />
        <main className={styles.home}>
          <Confetti
            colors={['#7400B8','#6930C3','#5E60CE','#5390D9','#4EA8DE','#56CFE1','#64DFDF','#72EFDD','#80FFDB']}
            height={size.height}
            width={size.width}
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
