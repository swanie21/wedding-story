import Image from 'next/image';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const AdventureFund: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/adventure-fund" />
      <Nav />
      <main>
        <h1>Our love to travel</h1>
        <Image src="/plane.svg" height="200" width="500" />
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <a href="https://www.myregistry.com/giftlist/drewandkirstenbasaltwedding" rel="noreferrer" target="_blank">TEST</a>
      </main>
    </>
  );
};

export default AdventureFund;
