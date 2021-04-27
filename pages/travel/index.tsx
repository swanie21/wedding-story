import styles from './travel.module.scss';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const Travel: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/travel" />
      <Nav />
      <main className={styles.travel} id="travel-page">
        <h1>Venue</h1>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className={`flex-half ${styles['flex-half']}`}>
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-1']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Ceremony</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-1']}`} />
                </div>
                <p>Swanson residence address: <a href="https://goo.gl/maps/NndR1pL8ptDMCx3k7" rel="noreferrer" target="_blank">422 Lewis Lane Basalt, Colorado 81621</a></p>
                <p>Ceremony starts at 6:00pm with reception to follow</p>
                <p>Pre-ceremony beverage welcome gathering to begin at 5:00pm</p>
              </div>
            </div>
          </div>
          <div className="flex-half">
            <div className={`${styles['travel__image']} ${styles['travel__image-1']}`} role="img" style={{ backgroundImage: `url('/wedding-venue.jpg')` }} />
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half flex-half-2">
            <div className={`${styles['travel__image']} ${styles['travel__image-2']}`} role="img" style={{ backgroundImage: `url('/map.jpg')` }} />
          </div>
          <div className="flex-half flex-half-1">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-2']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>If staying at the Element Basalt Hotel - distance to venue</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-2']}`} />
                </div>
                <p>Walking to venue is roughly 13 minutes and driving is 4 minutes</p>
                <p>Parking allowed around the inner edge of Lewis Lane (green oval on the map)</p>
                <p>Shuttle service provided between the house and the Element hotel between 5:00pm - 12:00am</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className={`flex-half ${styles['flex-half']}`}>
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-3']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Reception</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-3']}`} />
                </div>
                <p>Dress attire is business casual - wear appropriate shoes for grass and dancing, and bring a light sweater or coat for the evening</p>
                <p>Reception will begin winding down around 11:00pm with shuttle service until 12:00am</p>
              </div>
            </div>
          </div>
          <div className="flex-half">
            <div className={`${styles['travel__image']} ${styles['travel__image-3']}`} role="img" style={{ backgroundImage: `url('/tent.png')` }} />
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half flex-half-2">
            <div className={`${styles['travel__image']} ${styles['travel__image-2']}`} role="img" style={{ backgroundImage: `url('/map.jpg')` }} />
          </div>
          <div className="flex-half flex-half-1">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-4']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Post-wedding Brunch</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-4']}`} />
                </div>
                <p>We would love another opportunity to thank our guests and spend time with loved ones</p>
                <p>Join us at 9:00am back at the Swanson residence</p>
                <p>Pastries, bagels, fruit, and breakfast beverages will be served</p>
              </div>
            </div>
          </div>
        </div>
        <h1>Accommodations</h1>
        <h2 className={styles['travel__subtitle']}>Limited Airbnbs and hotel space - book early!</h2>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className={`flex-half ${styles['flex-half']}`}>
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-5']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Element Basalt</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-5']}`} />
                </div>
                <p>Address: <a href="https://g.page/elementbasaltaspen?share" rel="noreferrer" target="_blank">499 Market Street Basalt, Colorado 81621</a></p>
                <p>24 minutes from the Aspen/Pitkin County Airport</p>
                <p>13 minutes walking or 4 minutes driving to the Swanson residence</p>
              </div>
            </div>
          </div>
          <div className="flex-half">
            <div className={`${styles['travel__image']} ${styles['travel__image-5']}`} role="img" style={{ backgroundImage: `url('/element-hotel.jpeg')` }} />
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half flex-half-2">
            <div className={`${styles['travel__image']} ${styles['travel__image-6']}`} role="img" style={{ backgroundImage: `url('/basalt-mountain-inn.jpeg')` }} />
          </div>
          <div className="flex-half flex-half-1">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-6']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Basalt Mountain Inn</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-6']}`} />
                </div>
                <p>Address: <a href="https://goo.gl/maps/Abo4gPdov4RusnPw8" rel="noreferrer" target="_blank">220 Midland Ave, Basalt, CO 81621</a> (located in downtown Basalt)</p>
                <p>18 minutes from the Aspen/Pitkin County Airport</p>
                <p>10 minute drive to the Swanson residence</p>
                <p>More information and booking: <a href="https://www.basaltmountaininn.com/" rel="noreferrer" target="_blank">Basalt Mountain Inn website</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className={`flex-half ${styles['flex-half']}`}>
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-1']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Aspenalt Lodge</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-1']}`} />
                </div>
                <p>Address: <a href="https://g.page/Aspenalt?share" rel="noreferrer" target="_blank">157 Basalt Center Cir, Basalt, CO 81621</a></p>
                <p>18 minutes from the Aspen/Pitkin County Airport</p>
                <p>10 minute drive to the Swanson residence</p>
                <p>More information and booking: <a href="https://aspenalt.com/" rel="noreferrer" target="_blank">Aspenalt Lodge website</a></p>
              </div>
            </div>
          </div>
          <div className="flex-half">
            <div className={`${styles['travel__image']} ${styles['travel__image-7']}`} role="img" style={{ backgroundImage: `url('/aspenalt-lodge.jpg')` }} />
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half flex-half-2">
            <div className={`${styles['travel__image']} ${styles['travel__image-8']}`} role="img" style={{ backgroundImage: `url('/marble-distillery-inn.jpeg')` }} />
          </div>
          <div className="flex-half flex-half-1">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-2']} `} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Carbondale Hotels</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-2']}`} />
                </div>
                <p><a href="https://g.page/MarbleDistilling?share" rel="noreferrer" target="_blank">Marble Distilling Co. & The Distillery In</a></p>
                <p><a href="https://goo.gl/maps/9d1JCv3UdhiVXgpr6" rel="noreferrer" target="_blank">Days Inn by Wyndham Carbondale</a></p>
                <p><a href="https://goo.gl/maps/VMtS4Fu3rz7mrQ2q8" rel="noreferrer" target="_blank">Comfort Inn & Suites</a></p>
                <p>30 minutes from the Aspen/Pitkin County Airport</p>
                <p>15 minute drive to the Swanson residence</p>
              </div>
            </div>
          </div>
        </div>
        <h1>Travel</h1>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className={`flex-half ${styles['flex-half']}`}>
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-3']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Flying to Aspen</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-3']}`} />
                </div>
                <p>Flying into Aspen/Pitkin airport (ASE) is the closest option to Basalt (~20 minute drive to Hotel).</p>
                <ul>
                  <li>Direct flights offered by United and American Airlines</li>
                  <li>Daily connecting flights if flying through DEN</li>
                  <li>Car rentals: <a href="https://www.aspenairport.com/parking-transportation/rental-cars/" rel="noreferrer" target="_blank">Aspen Rental Cars</a></li>
                  <li>Other Aspen to Basalt transportation: <a href="https://www.rome2rio.com/s/Aspen/Basalt" rel="noreferrer" target="_blank">https://www.rome2rio.com/s/Aspen/Basalt</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-half">
            <div className={`${styles['travel__image']} ${styles['travel__image-9']}`} role="img" style={{ backgroundImage: `url('/aspen-pitkin-airport.jpeg')` }} />
          </div>
        </div>
        <div className={`flex-wrapper ${styles['travel__section']}`}>
          <div className="flex-half flex-half-2">
            <div className={`${styles['travel__image']} ${styles['travel__image-10']}`} role="img" style={{ backgroundImage: `url('/glenwood-canyon.jpeg')` }} />
          </div>
          <div className="flex-half flex-half-1">
            <div className={styles['travel__details--container']}>
              <span className={`${styles['travel__details--block']} ${styles['travel__details--accent-color-4']}`} />
              <div className={styles['travel__details']}>
                <div className={styles['travel__details--title']}>
                  <h2>Flying to Denver</h2>
                  <span className={`${styles['travel__details--title-highlight']} ${styles['travel__details--accent-color-4']}`} />
                </div>
                <p>Flying into Denver airport (DEN) is probably the cheapest option to get to CO. Leaves roughly a 3.5 hour drive west on I-70 through the scenic Coloradan Rocky Mountains to get to Basalt.</p>
                <ul>
                  <li>Direct flights offered by: Southwest, United, Delta, American, Spirit, Frontier, and JetBlue Airlines</li>
                  <li>Car rentals: <a href="https://www.flydenver.com/parking_transit/car-rentals" rel="noreferrer" target="_blank">Denver Rental Cars</a></li>
                  <li>Shuttle van from DIA to Snowmass: <a href="https://www.epicmountainexpress.com/" rel="noreferrer" target="_blank">Epic Mountain Express</a></li>
                  <li>Other Denver to Basalt transportation: <a href="https://www.rome2rio.com/s/Denver/Basalt" rel="noreferrer" target="_blank">https://www.rome2rio.com/s/Denver/Basalt</a></li>
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
