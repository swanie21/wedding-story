import { useScript } from '../../hooks';

import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const AdventureFund: React.FunctionComponent = () => {
  useScript('//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=oXEZw-KMmQYfSDjRFZPA7g2&v=2', 'script_myregistry_giftlist_iframe');

  return (
    <>
      <Meta canonical="/adventure-fund" />
      <Nav />
    </>
  );
};

export default AdventureFund;
