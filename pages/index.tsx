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
      <Nav />
      <main className={styles.home}>
        <Confetti
          colors={['#7400B8','#6930C3','#5E60CE','#5390D9','#4EA8DE','#56CFE1','#64DFDF','#72EFDD','#80FFDB']}
          height={height}
          width={width}
        />
        <h1 className={styles.title}>Drew & Kirsten</h1>
        <h2>Saturday, August 7th 2021</h2>
        <h3>Beginning at 5 o'clock, pre-ceremony beverages and gathering</h3>
        <h3>6 o'clock evening ceremony with reception to follow</h3>
        <p>* Due to mudslides on I-70 in the Glenwood Canyon the highway has been closed. If driving from Denver the best and fastest alternative route <br />is through Independence Pass.
        <a href="https://goo.gl/maps/e8yqojpYES4srM2DA" rel="noreferrer" target="_blank">&nbsp;Click here</a> to view route. You can also go through <a href="https://www.codot.gov/travel/assets/alternate-route-i70-glenwood-canyon-closure.png" rel="noreferrer" target="_blank">Steamboat Springs</a>, but this is a longer route.</p>
      </main>
    </>
  );
};

export default Home;
