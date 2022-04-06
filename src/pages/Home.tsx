import React from 'react';
import Contact from '../components/contact/Contact';
import Countdowns from '../components/countdowns/Countdowns';
import Ethos from '../components/ethos/Ethos';
import Hero from '../components/hero/Hero';
import Page from '../components/page/Page';
import Partnerships from '../components/partnerships/Partnerships';
import Products from '../components/products/Products';
import ProvenWay from '../components/proven-way/ProvenWay';
import SuccessStories from '../components/success-stories/SuccessStories';

const Home = (): JSX.Element => (
  <Page title="Home">
    <Hero />
    <Ethos />
    <ProvenWay />
    <Countdowns />
    <Partnerships />
    <Products />
    <SuccessStories />
    <Contact />
  </Page>
);

export default Home;
