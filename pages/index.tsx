import { Meta } from '../components/Meta';
import { Nav } from '../components/Nav';
import styles from '../styles/Home.module.scss';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/home" />
      <div className={styles.container}>
        <Nav />
        <main className={styles.home}>
          <h1 className={styles.title}>Drew & Kirsten</h1>
          <h2>Saturday, August 7th 2021</h2>
          <h2>6 o'clock evening ceremony with reception to follow</h2>
        </main>
      </div>
    </>
  );
};

export default Home;
