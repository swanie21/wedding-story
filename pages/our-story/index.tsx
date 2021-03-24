import Image from 'next/image';
import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import styles from './our-story.module.scss';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const OurStory: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/our-story" />
      <Nav />
      <main className={styles.timeline}>
        <h1>Our Story</h1>
        <ul className={styles['timeline__list']}>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="coffee and bagel icons" src="/coffee-meets-bagel.png" height="258" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>October 14, 2018</p>
                <p className={styles['timeline__card--description']}>Met on the dating app Coffee Meets Bagel.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Union Lodge #1 bar seating" src="/union-lodge.jpg" height="359" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>October 15, 2018</p>
                <p className={styles['timeline__card--description']}>They had their first date at a small speakeasy bar called Union Lodge #1 and hit it off immediately. They ended up talking all night long.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="snoeshoeing in Marion Gulch near Basalt" src="/snowshoeing.jpg" height="315" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>January 1, 2019</p>
                <p className={styles['timeline__card--description']}>With a shared love for the outdoors, Kirsten took Drew snowshoeing for the first time at Marion Gulch near Basalt.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="motorcycle ride to the Rocky Mountain National Park" src="/motorcycle-rides.jpg" height="560" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>April 13, 2019</p>
                <p className={styles['timeline__card--description']}>Kirsten was going to sell her motorcycle, but Drew surprised her with the annoucement that he had enrolled in riding school. Together they enjoy riding their Kawasakis through Colorado's scenic terrain!</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Phantom of the Opera billboard" src="/broadway-play.jpg" height="560" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>April 26, 2019</p>
                <p className={styles['timeline__card--description']}>Kirsten and Drew live next to the Performing Arts Center and they take full advantage of watching all the Broadway shows and orchestra performances.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Horsetooth Reservoir in Fort Collins" src="/fort-collins.jpg" height="315" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>May 26, 2019</p>
                <p className={styles['timeline__card--description']}>Drew took Kirsten for a weekend trip to Fort Collins and gave her a tour of CSU where he attended undergrad.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="winery" src="/france-treehouse.jpg" height="419" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>July 5, 2019</p>
                <p className={styles['timeline__card--description']}>Initially they  connected over their shared passion for travel. Their first international trip together was to France for Sara's wedding, Kirsten's friend from ASU. One of the highlights from the trip was staying in a treehouse in the Burgundy countryside.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="tennis tournament in Steamboat Springs" src="/tennis-tournament.jpg" height="315" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>August 3, 2019</p>
                <p className={styles['timeline__card--description']}>Drew and Kirsten had a great time playing in their first tennis tournament together in Steamboat Springs.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Kirsten's family" src="/meet-the-swansons.jpg" height="380" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>September 20, 2019</p>
                <p className={styles['timeline__card--description']}>Drew met Kirsten's parents for the first time at their home in Basalt. They went on a fly fishing guided tour with Kirsten's dad and between all of them caught about a dozen brown trout. Fun activities of the weekend also included tennis, pickleball, and board games.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="tennis champs on the court" src="/tennis-tournament-winners.jpg" height="430" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>September 28, 2019</p>
                <p className={styles['timeline__card--description']}>Although Kirsten plays tennis at a higher level than Drew, they both entered and won their separate doubles brackets at the Berkely Park Tennis Tournament.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="drinking beer at the Great American Beer Festival" src="/great-american-beer-festival.jpg" height="492" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>October 4, 2019</p>
                <p className={styles['timeline__card--description']}>Drew surprised Kirsten with tickets to the Great American Beer Festival where they made pretzel necklaces and drank many award winning beers.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Drew with eye bandage and Kirsten with arm sling" src="/the-crippled-couple.jpg" height="560" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>December 13, 2019</p>
                <p className={styles['timeline__card--description']}>Even when Drew and Kirsten get banged up, they always have each other and a wonderful network of friends for support.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Barton family" src="/meet-the-bartons.jpg" height="560" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>December 22, 2019</p>
                <p className={styles['timeline__card--description']}>Kirsten met Drew's parents for the first time when they visited Denver for the holidays from their home in Lisbon, Portugal. They enjoyed glühwein and traditional German food at Denver's Christkindl Market.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="ocean water front in La Jolla" src="/san-diego-trip.jpg" height="315" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>January 4, 2020</p>
                <p className={styles['timeline__card--description']}>Kirsten planned a surprise birthday trip to San Diego for Drew's birthday.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Drew, Ben, Vic and Kirsten in New York City" src="/new-york-trip.jpg" height="416" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>February 14, 2020</p>
                <p className={styles['timeline__card--description']}>Drew coordinated a surprise birthday trip to New York for Kirsten's birthday to watch the New York Open tennis tournament. Plus, Kirsten met Ben and Vic, her future brother and sister-in-law.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="hiking at Castlewood Canyon state park" src="/hiking.jpg" height="315" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>April 19, 2020</p>
                <p className={styles['timeline__card--description']}>Hiking was a perfect social distancing activity during COVID. They took the opportunity to explore new hiking trials during spring and summer!</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="engagement by the river" src="/engagement.jpg" height="560" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>June 6, 2020</p>
                <p className={styles['timeline__card--description']}>Drew and Kirsten went on a weekend getaway filled with bike rides, paddle boarding, and white water rafting in Basalt. During the bike ride they pulled over alongside the Roaring Fork riverbank and Drew got on one knee and popped the question!</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="scuba diving in Key Largo" src="/scuba-diving.jpg" height="560" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>November 22, 2020</p>
                <p className={styles['timeline__card--description']}>After Drew picked up tennis, it was now Kirsten's time to try Drew's favorite pastime. Last winter Kirsten got her Open Water Scuba Certification. Right after getting certified, they were able to dive together in Key Largo.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Steve, Glenna, Jim and Beth" src="/parents.jpg" height="258" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>April 9, 2021</p>
                <p className={styles['timeline__card--description']}>Our parents met for the first time! They enjoyed helping Drew and Kirsten taste and select food for their wedding menu.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <AttentionSeeker effect="tada" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="along the canal in Chablis, France" src="/france-chablis.jpg" height="315" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>August 7, 2021</p>
                <p className={styles['timeline__card--description']}>Kirsten and Drew's big day to tie the knot!!!</p>
              </div>
            </AttentionSeeker>
          </li>
        </ul>
      </main>
    </>
  );
};

export default OurStory;
