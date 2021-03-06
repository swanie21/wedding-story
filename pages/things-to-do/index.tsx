import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const ThingsToDo: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="things-to-do" />
      <Nav />
      <main>
        <h1>Things to do</h1>
      </main>
    </>
  );
};

export default ThingsToDo;
