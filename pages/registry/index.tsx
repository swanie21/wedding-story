import styles from './registry.module.scss';
import Image from 'next/image';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const AdventureFund: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/registry" />
      <Nav />
      <main className={styles.registry}>
        <h1>Adventure Fund</h1>
        <Image src="/plane.svg" height="200" width="500" />
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <a href="https://www.myregistry.com/giftlist/drewandkirstenbasaltwedding" rel="noreferrer" target="_blank">TEST</a>
      </main>
    </>
  );
};

export default AdventureFund;
