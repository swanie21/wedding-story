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
                <p className={styles['timeline__card--description']}>We had our first date at Union Lodge #1, which is like a small speakeasy bar.</p>
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
                <p className={styles['timeline__card--description']}>Our first winter activity was snowshowing at Marion Gulch near Basalt.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Phantom of the Opera billboard" src="/broadway-play.jpg" height="560" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>April 26, 2019</p>
                <p className={styles['timeline__card--description']}>Kirsten and Drew live right across from the Performing Arts Center and they take full advantage of watching all the Broadways and orchestra performances.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Horsetooth Reservoir in Fort Collins" src="/fort-collins.jpg" height="315" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>May 26, 2019</p>
                <p className={styles['timeline__card--description']}>Drew and Kirsten spent a weekend in Fort Collins and he gave her a tour of CSU where he went to college.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="winery" src="/france-treehouse.jpg" height="419" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>July 5, 2019</p>
                <p className={styles['timeline__card--description']}>Our first international trip was to France. We went for Kirsten's friend Sara's wedding.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="tennis tournament in Steamboat Springs" src="/tennis-tournament.jpg" height="315" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>August 3, 2019</p>
                <p className={styles['timeline__card--description']}>Drew and Kirsten played in their first tennis tournament together in Steamboat Springs. Unfortunately, they lost in the second match to lobbers.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="drinking beer at the Great American Beer Festival" src="/great-american-beer-festival.jpg" height="492" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>October 4, 2019</p>
                <p className={styles['timeline__card--description']}>Drew surprised Kirsten with tickets to the Great American Beer Festival.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="motorcycle ride to the Rocky Mountain National Park" src="/motorcycle-rides.jpg" height="560" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>DATE</p>
                <p className={styles['timeline__card--description']}>Kirsten was going to sell her motorcycle, but then Drew surprised her with the annoucement that he had enrolled in riding school. Now together they enjoy going on rides!</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide direction="right" triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="Kirsten's family" src="/meet-the-swansons.jpg" height="380" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>September 20, 2019</p>
                <p className={styles['timeline__card--description']}>Drew met Kirsten's parents for the first time in Basalt.</p>
              </div>
            </Slide>
          </li>
          <li className={styles['timeline__card']}>
            <div className={styles['timeline__card--bulletpoint']} />
            <Slide triggerOnce>
              <div className={styles['timeline__card--details']}>
                <div className={styles['timeline__card--image']}>
                  <Image alt="tennis champs on the court" src="/tennis-tournament-winners.jpg" height="430" width="420" />
                </div>
                <p className={styles['timeline__card--date']}>September 28, 2019</p>
                <p className={styles['timeline__card--description']}>Way may not win playing together, but separately we both won our tennis brackets at Berkely Park tournement.</p>
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
                <p className={styles['timeline__card--description']}>Drew and Kirsten like to spend so much time together that they even get injured at the same time. But we always have good friends and each other for support.</p>
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
                <p className={styles['timeline__card--description']}>Kirsten met Drew's parents who live in Lisbon, Portugal for the first time when they visited Denver.</p>
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
                <p className={styles['timeline__card--description']}>Surprise birthday trip to San Diego for Drew's birthday.</p>
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
                <p className={styles['timeline__card--description']}>Surprise birthday trip to New York for Kirsten's birthday to watch the New York Open tennis tournament. Plus, Kirsten met Ben and Vic, her future brother and sister-in-laws.</p>
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
                <p className={styles['timeline__card--description']}>A perfect social distancing activity during COVID was hiking. We went on several hikes during spring and summer!</p>
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
                <p className={styles['timeline__card--description']}>Drew proposed to Kirsten in Basalt during a bike ride along the Roaring Fork River.</p>
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
                <p className={styles['timeline__card--description']}>Now it was Kirsten's time to pick up one of Drew's hobbies. Last winter Kirsten got her open water scuba ccertification. We got to take our first dive trip together in Key Largo.</p>
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
                <p className={styles['timeline__card--description']}>Our parents met for the first time! They helped taste food with us for our wedding menu.</p>
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
                <p className={styles['timeline__card--description']}>Kirsten and Drew's big day to tie the knot!</p>
              </div>
            </AttentionSeeker>
          </li>
        </ul>
      </main>
    </>
  );
};

export default OurStory;
