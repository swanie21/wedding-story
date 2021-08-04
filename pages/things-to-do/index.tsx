import styles from './things-to-do.module.scss';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const ThingsToDo: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/things-to-do" />
      <Nav />
      <main className={styles.activities}>
        <h1>Things to do</h1>
        <section className={styles['activities__section']}>
          <h2>Activities</h2>
          <ul>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/downtown-basalt.jpg')`}} />
              <p>Take a stroll through historic <a href="https://www.basaltchamber.org/" rel="noreferrer" target="_blank">downtown Basalt</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/dads-fishing.jpg')`}} />
              <p>Catch some brownies or rainbow trout on a fly fishing wade or float trip: <a href="http://www.fryingpananglers.com/" rel="noreferrer" target="_blank">Frying Pan Anglers</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/alpine-coaster.jpg')`}} />
              <p>Zoom down the alpine coaster, rock climb, or try the ropes course in Snowmass: <a href="https://www.gosnowmass.com/activity/the-lost-forest/" rel="noreferrer" target="_blank">The Lost Forest</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/iron-mountain-hot-springs.jpg')`}} />
              <p>Enjoy multiple hot springs in Glenwood Springs: <a href="http://www.ironmountainhotsprings.com/" rel="noreferrer" target="_blank">Iron Mountain Hot Springs</a> or <a href="https://www.hotspringspool.com/" rel="noreferrer" target="_blank">Glenwood Hot Springs</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/maroon-bells.jpg')`}} />
              <p>Hike Maroon Bells in Aspen: <a href="https://aspenchamber.org/plan-trip/trip-highlights/maroon-bells/reservations" rel="noreferrer" target="_blank">Book shuttle reservation</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/duckies.jpg')`}} />
              <p>Splash down the river by raft or ducky boats: <a href="https://www.aspenwhitewater.com/" rel="noreferrer" target="_blank">Aspen White Water</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/ruedi-reservoir.png')`}} />
              <p>Lots of water sports like paddle boarding or jet skiing: <a href="https://www.basaltchamber.org/activity/ruedi/" rel="noreferrer" target="_blank">Rudi Resorvoir</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/bike-trail.png')`}} />
              <p>Bike along the Roaring Fork river or other bike trails: <a href="https://www.rfta.com/trail-information/" rel="noreferrer" target="_blank">Rio Grande Trail</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/drew-and-beth.jpg')`}} />
              <p>Plenty of hiking trails around the Roaring Fork Valley: <a href="https://www.alltrails.com/us/colorado/basalt" rel="noreferrer" target="_blank">All Trails list of hikes</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/tennis-court.png')`}} />
              <p>Community tennis court accessible to guests in the Swanson neighborhood: <a href="https://www.google.com/maps/dir/Element+Basalt+-+Aspen,+Market+Street,+Basalt,+CO/39.3850063,-107.0906194/@39.3897697,-107.0905078,1685m/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x8741b2941fb01613:0x17e76a375d286254!2m2!1d-107.0816665!2d39.3856458!1m0!3e2" rel="noreferrer" target="_blank">Directions from Element hotel</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/golf-course.jpg')`}} />
              <p>Many golf courses in the Roaring Fork Valley: <a href="https://www.golflink.com/golf-courses/co/basalt/" rel="noreferrer" target="_blank">List of Basalt courses</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/john-denver-santuary.jpg')`}} />
              <p>Take a walk through John Denver Sanctuary in Aspen</p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/north-star-nature-preserve.jpg')`}} />
              <p>Venture to <a href="https://www.northstaraspen.com/"rel="noreferrer" target="_blank">North Star Nature Preserve</a> for wildlife viewing in Aspen</p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/cairns.jpg')`}} />
              <p>Challenge the Bartons and Swansons with cairn building</p>
            </li>
          </ul>
          <h2>Food & Beverage</h2>
          <ul>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/woody-creek-distillers.jpg')`}} />
              <p>Great distillery right in El Jebel: <a href="https://woodycreekdistillers.com/" rel="noreferrer" target="_blank">Woody Creek Distillers</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/capitol-creek-brewery.jpg')`}} />
              <p>Kick back for some local brews: <a href="http://capitolcreekbrewery.com/"rel="noreferrer" target="_blank">Capitol Creek Brewery</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/cafe-bernards.jpg')`}} />
              <p>Delicious Brunch at this small family owned restaurant: <a href="https://cafebernard.net/" rel="noreferrer" target="_blank">Cafe Bernard</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/aspen-restaurants.jpg')`}} />
              <p>Take a 25 minute drive to Aspen for fine cuisine and shopping</p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/bella-mia.jpg')`}} />
              <p>Little Italian spot in El Jebel: <a href="https://goo.gl/maps/vaYs8SM9AEmYLyUw7" rel="noreferrer" target="_blank">Bella Mia</a></p>
            </li>
            <li>
              <div className={styles['activities__image-container']} role="img" style={{ backgroundImage: `url('/basalt-farmers-market.jpg')`}} />
              <p>Enjoy downtown Basalt's Sunday <a href="http://www.basaltsundaymarket.com/" rel="noreferrer" target="_blank">Farmers Market</a></p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default ThingsToDo;
