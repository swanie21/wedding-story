import styles from './travel.module.scss';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const Travel: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/travel" />
      <Nav />
      <main className={styles.travel}>
        <h1>Venue</h1>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--block-1']}`} />
              <div className={styles['travel__details']}>
                <h2>Swanson Residence</h2>
                <p>Address: <a href="https://g.page/elementbasaltaspen?share" rel="noreferrer" target="_blank">499 Market Street Basalt, Colorado 81621</a></p>
                <p>Ceremony and reception to follow at the same location</p>
                <p>Parking allowed in the neighborhood</p>
                <p>Shuttle service from the Element hotel</p>
                <p>Dress is business casual</p>
              </div>
            </div>
          </div>
          <div className="flex-half">
            <div className={`${styles['travel__image']} ${styles['travel__image-1']}`} role="img"  style={{ backgroundImage: `url('/wedding-venue.jpg')` }} />
          </div>
        </div>
        <h1>Accommodations</h1>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half flex-half-2">
            <div className={`${styles['travel__image']} ${styles['travel__image-2']}`} role="img"  style={{ backgroundImage: `url('/element-hotel.jpeg')` }} />
          </div>
          <div className="flex-half flex-half-1">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--block-2']}`} />
              <div className={styles['travel__details']}>
                <h2>Element Basalt</h2>
                <p>Address: <a href="https://g.page/elementbasaltaspen?share" rel="noreferrer" target="_blank">499 Market Street Basalt, Colorado 81621</a></p>
                <p>16 miles from the Aspen/Pitkin County Airport</p>
                <p>13 minutes walking or 4 minutes driving to the Swanson residence</p>
                <p>We will be having a shuttle from this hotel  transport guests to the wedding venue</p>
                <p><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1594057158691&key=GRP&app=resvlink" rel="noreferrer" target="_blank">Click here</a> to book discounted rate</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--block-3']}`} />
              <div className={styles['travel__details']}>
                <h2>Basalt Mountain Inn</h2>
                <p>Address: <a href="https://goo.gl/maps/Abo4gPdov4RusnPw8" rel="noreferrer" target="_blank">220 Midland Ave, Basalt, CO 81621</a> (located in downtown Basalt)</p>
                <p>10 minutes driving to the Swanson residence</p>
                <p>More information and booking: <a href="https://www.basaltmountaininn.com/https://www.basaltmountaininn.com/" rel="noreferrer" target="_blank">Basalt Mountain Inn website</a></p>
              </div>
            </div>
          </div>
          <div className="flex-half">
            <div className={`${styles['travel__image']} ${styles['travel__image-3']}`} role="img"  style={{ backgroundImage: `url('/basalt-mountain-inn.jpeg')` }} />
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half flex-half-2">
            <div className={`${styles['travel__image']} ${styles['travel__image-4']}`} role="img"  style={{ backgroundImage: `url('/marble-distillery-inn.jpeg')` }} />
          </div>
          <div className="flex-half flex-half-1">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--block-4']} `} />
              <div className={styles['travel__details']}>
                <h2>Carbondale Hotels</h2>
                <p><a href="https://g.page/MarbleDistilling?share" rel="noreferrer" target="_blank">Marble Distilling Co. & The Distillery In</a></p>
                <p><a href="https://goo.gl/maps/9d1JCv3UdhiVXgpr6" rel="noreferrer" target="_blank">Days Inn by Wyndham Carbondale</a></p>
                <p><a href="https://goo.gl/maps/VMtS4Fu3rz7mrQ2q8" rel="noreferrer" target="_blank">Comfort Inn & Suites</a></p>
              </div>
            </div>
          </div>
        </div>
        <h1>Travel</h1>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--block-5']}`} />
              <div className={styles['travel__details']}>
                <p>Flying into Apen/Pitkin airport (ASE) is the closest option to Basalt (~20 minute drive to Hotel)</p>
                <ul>
                  <li>Direct flights offered by United and American Airlines</li>
                  <li>Daily connecting flights if flying through DEN</li>
                  <li>Car rentals: <a href="https://www.aspenairport.com/parking-transportation/rental-cars/" rel="noreferrer" target="_blank">Aspen Rental Cars</a></li>
                  <li>Other Aspen to Basalt transportation: https://www.rome2rio.com/s/Aspen/Basalt</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-half">
            <div className={`${styles['travel__image']} ${styles['travel__image-5']}`} role="img"  style={{ backgroundImage: `url('/aspen-pitkin-airport.jpeg')` }} />
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half flex-half-2">
            <div className={`${styles['travel__image']} ${styles['travel__image-6']}`} role="img"  style={{ backgroundImage: `url('/glenwood-canyon.jpeg')` }} />
          </div>
          <div className="flex-half flex-half-1">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--block-6']}`} />
              <div className={styles['travel__details']}>
                <p>Flying into Denver airport (DEN) is probably the cheapest option to get to CO. Leaves a beautiful 3.5 - 4 hour drive west on I-70 through the scenic Coloradan Rocky Mountains to get to Basalt</p>
                <ul>
                  <li>Direct flights offered by: Southwest, United, Delta, American, Spirit, Frontier, and JetBlue Airlines</li>
                  <li>Denver Rental Cars: https://www.flydenver.com/parking_transit/car-rentals</li>
                  <li>Denver to Basalt transportation: https://www.rome2rio.com/s/Denver/Basalt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Travel;
