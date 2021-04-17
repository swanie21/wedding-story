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
        <section>
          <h2>Food & Beverage</h2>
          <ul>
            <li>Great distillery right in El Jebel: <a href="https://woodycreekdistillers.com/" rel="noreferrer" target="_blank">Woody Creek Distillers</a></li>
            <li>Kick back for some local brews: <a href="">Capitol Creek Brewery</a></li>
            <li>Delicious Brunch at this small family owned restaurant: <a href="">Cafe Bernard</a></li>
            <li>Little Italian spot in El Jebel: <a href="">Bella Mia</a></li>
            <li>Farmers Market in downtown Basalt</li>
          </ul>
          <h2>Activities</h2>
          <ul>
            <li>Wade and float trips to get your fly fishing fill: <a href="http://www.fryingpananglers.com/" rel="noreferrer" target="_blank">Frying Pan Anglers</a></li>
            <li>Alpine coaster and scenic tours in Snowmass Village: https://www.gosnowmass.com/activity/breathtaker-alpine-coaster-2/</li>
            <li>Enjoy multiple hot springs in Glenwood Springs: <a href="http://www.ironmountainhotsprings.com/" rel="noreferrer" target="_blank">Iron Mountain Hot Springs</a> <a href="" rel="noreferrer" target="_blank">Glenwood Hot Springs</a></li>
            <li>Hike Maroon Bells in Aspen: https://www.colorado.com/articles/explore-maroon-bells-what-you-need-know</li>
            <li>Whitewater rafting and ducky tours: <a href="https://www.aspenwhitewater.com/">Aspen White Water</a></li>
            <li>Plenty of water sports like paddle boarding or jet skiing at Rudi Resorvoir</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default ThingsToDo;
