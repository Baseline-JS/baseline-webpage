import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import styles from './page.module.scss';

interface Props {
  title: string;
  description?: string;
  children: JSX.Element[] | JSX.Element;
}

const Page = (props: Props): JSX.Element => {
  const { title, description = title, children } = props;
  return (
    <div className={styles.page}>
      <div>
        <title>Devika Baseline - {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </div>
      <script async src="https://kit.fontawesome.com/c6e566ba48.js" />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
