import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const Travel: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/travel" />
      <Nav />
      <main>
        <h1>Travel</h1>
      </main>
    </>
  );
};

export default Travel;
