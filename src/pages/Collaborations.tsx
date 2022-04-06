import React from 'react';
import CollabColumns from '../components/collab-columns/CollabColumns';
import Contact from '../components/contact/Contact';
import Countdown from '../components/countdowns/countdown/Countdown';
import EnquiryPopup from '../components/enquiry/enquiry-popup/EnquiryPopup';
import Page from '../components/page/Page';
import Product from '../components/products/product/Product';
import styles from '../components/products/products.module.scss';

const Collaborations = (): JSX.Element => (
  <Page title="Collaborations">
    <Countdown
      heading="Collaborations"
      content={
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id.
          </p>
          <EnquiryPopup buttonStyle="text" />
        </>
      }
      image=""
    />
    <Product
      slides={[
        {
          leftContent: (
            <div className={styles.left}>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id.
              </p>
            </div>
          ),
          rightContent: (
            <div className={styles.right}>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aenean eget tristique mi,
                facilisis scelerisque quam. Phasellus dictum molestie erat, sed
                vulputate eros interdum a. Sed faucibus urna a ornare molestie.
                Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
                dignissim.
              </p>
            </div>
          ),
          image: '',
        },
      ]}
    />
    <Product
      slides={[
        {
          leftContent: (
            <div className={styles.left}>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id.
              </p>
            </div>
          ),
          rightContent: (
            <div className={styles.right}>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aenean eget tristique mi,
                facilisis scelerisque quam. Phasellus dictum molestie erat, sed
                vulputate eros interdum a. Sed faucibus urna a ornare molestie.
                Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
                dignissim.
              </p>
            </div>
          ),
          image: '',
        },
      ]}
    />
    <Product
      slides={[
        {
          leftContent: (
            <div className={styles.left}>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id.
              </p>
            </div>
          ),
          rightContent: (
            <div className={styles.right}>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aenean eget tristique mi,
                facilisis scelerisque quam. Phasellus dictum molestie erat, sed
                vulputate eros interdum a. Sed faucibus urna a ornare molestie.
                Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
                dignissim.
              </p>
            </div>
          ),
          image: '',
        },
      ]}
    />
    <Product
      slides={[
        {
          leftContent: (
            <div className={styles.left}>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id.
              </p>
            </div>
          ),
          rightContent: (
            <div className={styles.right}>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aenean eget tristique mi,
                facilisis scelerisque quam. Phasellus dictum molestie erat, sed
                vulputate eros interdum a. Sed faucibus urna a ornare molestie.
                Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
                dignissim.
              </p>
            </div>
          ),
          image: '',
        },
      ]}
    />
    <Product
      slides={[
        {
          leftContent: (
            <div className={styles.left}>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id.
              </p>
            </div>
          ),
          rightContent: (
            <div className={styles.right}>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aenean eget tristique mi,
                facilisis scelerisque quam. Phasellus dictum molestie erat, sed
                vulputate eros interdum a. Sed faucibus urna a ornare molestie.
                Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
                dignissim.
              </p>
            </div>
          ),
          image: '',
        },
      ]}
    />
    <Product
      slides={[
        {
          leftContent: (
            <div className={styles.left}>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id.
              </p>
            </div>
          ),
          rightContent: (
            <div className={styles.right}>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aenean eget tristique mi,
                facilisis scelerisque quam. Phasellus dictum molestie erat, sed
                vulputate eros interdum a. Sed faucibus urna a ornare molestie.
                Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
                dignissim.
              </p>
            </div>
          ),
          image: '',
        },
      ]}
    />
    <CollabColumns />
    <Contact />
  </Page>
);

export default Collaborations;
