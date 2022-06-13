import Head from 'next/head';
import Footer from './Footer';
import Header from './Header.js';

function LayoutContainer({ title,children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/icon.30x30.cutting.png' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LayoutContainer;
