import styles from './registry.module.scss';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const AdventureFund: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/registry" />
      <Nav />
      <main className={styles.registry}>
        <h1>The Barton Fund</h1>
        <p>Your presence at our wedding is all that we wish for. However, if you want to give a gift, we will be grateful to a cash donation towards our new lives together. Thank you for all of your love and support!</p>
        <a href="https://www.myregistry.com/giftlist/drewandkirstenbasaltwedding" rel="noreferrer" target="_blank">Click to donate</a>
      </main>
    </>
  );
};

export default AdventureFund;
