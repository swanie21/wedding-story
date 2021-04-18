import styles from './registry.module.scss';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const AdventureFund: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/registry" />
      <Nav />
      <main className={styles.registry}>
        <div>
          <iframe src="https://giphy.com/embed/3oz8xBkRsgPTnbK1GM" frameBorder="0" className={styles['registry__iframe']} allowFullScreen />
          <p className={styles['registry__iframe--credit']}><a href="https://giphy.com/gifs/dance-loop-christmas-3oz8xBkRsgPTnbK1GM">via GIPHY</a></p>
        </div>
        <div className={styles['registry__info']}>
          <h1>The Barton Fund</h1>
          <p>Your presence at our wedding is all that we wish for. However, if you would like to give a gift, we'd be grateful for a cash donation towards our new lives together. Thank you for all of your love and support!</p>
          <a className={styles['registry__button']} href="https://www.myregistry.com/wedding-registry/drew-barton-and-kirsten-swanson-denver-co/2775446/giftlist" rel="noreferrer" target="_blank">Click to donate</a>
        </div>
      </main>
    </>
  );
};

export default AdventureFund;
