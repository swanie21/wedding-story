import { Meta } from '../../components/Meta';
import { Nav } from '../../components/Nav';

const WeddingParty: React.FunctionComponent = () => {
  return (
    <>
      <Meta canonical="/wedding-party" />
      <Nav />
      <main>
        <h1>Wedding Party</h1>
        <h2>The Gentlemen</h2>
        <ul>
          <li>Ben Barton</li>
          <li>Xander Starekow</li>
          <li>Matty Williams</li>
          <li>Taylor Garner</li>
          <li>Cosimo Leone</li>
        </ul>
        <h2>The Ladies</h2>
        <ul>
          <li>Nicole Beckett</li>
          <li>Kristen Wakeman</li>
          <li>Alicia Hays</li>
          <li>Lindesy Moore</li>
          <li>Lucia Ulc</li>
        </ul>
      </main>
    </>
  );
};

export default WeddingParty;
