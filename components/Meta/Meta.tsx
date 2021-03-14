import Head from 'next/head';

interface MetaProps {
  canonical: string;
}

export const Meta: React.FunctionComponent<MetaProps> = ({
  canonical,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Drew & Kirsten's Wedding Website</title>
      <meta name="description" content="Drew & Kirsten's wedding website for guests about wedding details and schedule" />
      <meta name="author" content="Brandfolder" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="Drew & Kirsten's Wedding Website" />
      <meta name="og:description" property="og:description" content="Drew & Kirsten's wedding website for guests about wedding details and schedule" />
      <meta property="og:site_name" content="Brandfolder" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="NEED IMAGE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Drew & Kirsten's Wedding Website" />
      <meta name="twitter:description" content="Drew & Kirsten's wedding website for guests about wedding details and schedule" />
      <meta name="twitter:site" content="Brandfolder" />
      <meta name="twitter:image" content="NEED IMAGE" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    </Head>
  );
};
