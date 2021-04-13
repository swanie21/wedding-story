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
        <h2>The Gentlemen</h2>
        <ul>
          <li>
            <div>
              <div className={styles['wedding-party__headshot']}>
                <img src="/ben.jpg" height="" width="" />
              </div>
              <p>Ben Barton</p>
            </div>
          </li>
          <li>
            <div>
              <div className={styles['wedding-party__headshot']}>
                <img src="/xander.jpg" height="" width="" />
              </div>
              <p>Xander Starekow</p>
            </div>
          </li>
          <li>
            <div>
              <div className={styles['wedding-party__headshot']}>
                <img src="/matty.jpg" height="" width="" />
              </div>
              <p>Matty Williams</p>
            </div>
          </li>
          <li>
            <div>
              <div className={styles['wedding-party__headshot']}>
                <img src="/taylor.jpg" height="" width="" />
              </div>
              <p>Taylor Garner</p>
            </div>
          </li>
          <li>
            <div>
              <div className={styles['wedding-party__headshot']}>
                <img src="/cosi.jpg" height="" width="" />
              </div>  
              <p>Cosimo Leone</p>
            </div>
          </li>
        </ul>
        <h2>The Ladies</h2>
        <ul>
          <li>Nicole Beckett</li>
          <li>Kristen Wakeman</li>
          <li>Alicia Hays</li>
          <li>Lindesy Moore</li>
          <li>Lucia Ulc</li>
        </ul>
      </main>
    </>
  );
};

export default WeddingParty;
