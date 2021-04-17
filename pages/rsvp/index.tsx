import styles from './rsvp.module.scss';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const Rsvp: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/rsvp" />
      <Nav />
      <main className={styles.rsvp}>
        <div className="flex-wrapper">
          <div className={styles['rsvp__description']}>
            <h1>Kindly RSVP</h1>
            <p>Please fill out the form for yourself and your guest (one form per guest). Children are allowed, but please fill out the form for them, so that we may get an accurate head count.</p>
            <p>If you are filling out the form for multiple people, please refresh the page for a new form.</p>
            <p>For other inquiries please don't hesitate to reach out to us at drewbarton@gmail.com or kswanie21@gmail.com.</p>
          </div>
          <div className={styles['rsvp__form']}>
            <div className={styles['rsvp__form--container']}>
              <iframe src="https://app.smartsheet.com/b/form/6654f3b1703347fd84d4457d294ed8a8" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Rsvp;
