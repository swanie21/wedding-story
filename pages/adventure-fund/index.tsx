import Head from 'next/head';
import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const AdventureFund: React.FunctionComponent = () => {
  return (
    <>
      <Head>
        <script id='script_myregistry_giftlist_iframe' type='text/javascript' src='//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=oXEZw-KMmQYfSDjRFZPA7g2&v=2'></script>
      </Head>
      <Meta canonical="/adventure-fund" />
      <Nav />
      <main>
        <h1>Adventure Fund</h1>
      </main>
    </>
  );
};

export default AdventureFund;
