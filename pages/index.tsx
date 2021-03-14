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
        </main>
      </div>
    </>
  );
};

export default Home;
