import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const Rsvp: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/things-to-do" />
      <Nav />
      <main>
        <h1>RSVP</h1>
        <p>Please fill the form out per person in your party including children and plus ones.</p>
      </main>
    </>
  );
};

export default Rsvp;
