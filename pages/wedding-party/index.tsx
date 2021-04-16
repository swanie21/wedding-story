import styles from './wedding-party.module.scss';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const WeddingParty: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/wedding-party" />
      <Nav />
      <main className={styles['wedding-party']}>
        <h1>Wedding Party</h1>
        <div className={styles['wedding-party__headshots']}>
          <ul>
            <li><h2 className={styles['wedding-party__subtitle']}>The Lads</h2></li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/ben.jpg')` }}>
                <p>Best Man: Ben Barton</p>
              </div>
            </li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/xander.jpg')` }}>
                <p>Xander Starekow</p>
              </div>
            </li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/matty.jpg')` }}>
                <p>Matty Williams</p>
              </div>
            </li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/taylor.jpg')` }}>
                <p>Taylor Garner</p>
              </div>
            </li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/cosi.jpg')` }}>
                <p>Cosimo Leone</p>
              </div>
            </li>
          </ul>
          <ul>
            <li><h2 className={`${styles['wedding-party__subtitle']} ${styles['wedding-party__subtitle-2']}`}>The Ladies</h2></li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/coley.jpg')` }}>
                <p>Maid of Honor: Nicole Beckett</p>
              </div>
            </li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/kristen.jpg')` }}>
                <p>Kristen Wakeman</p>
              </div>
            </li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/alicia.jpg')` }}>
                <p>Alicia Hays</p>
              </div>
            </li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/lindsey.jpg')` }}>
                <p>Lindesy Moore</p>
              </div>
            </li>
            <li className={styles['wedding-party__profile']}>
              <div className={styles['wedding-party__headshot']} style={{ backgroundImage: `url('/lucia.jpg')` }}>
                <p>Lucia Ulc</p>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default WeddingParty;
