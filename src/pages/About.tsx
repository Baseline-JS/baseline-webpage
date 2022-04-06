import React from 'react';
import styles from '../components/about-banner/about-banner.module.scss';
import Page from '../components/page/Page';
import AboutBanner from '../components/about-banner/AboutBanner';

const About = (): JSX.Element => (
  <Page title="About us">
    <AboutBanner
      heading="Our Story"
      body={
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id. Donec eu ligula nec ante rutrum interdum. Quisque
            hendrerit, mi eu fermentum pretium, nibh est sollicitudin orci, eu
            dapibus nibh justo ut risus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Aenean eget
            tristique mi, facilisis scelerisque quam. Phasellus dictum molestie
            erat, sed vulputate eros interdum a. Sed faucibus urna a ornare
            molestie. Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
            dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id. Donec eu ligula nec ante rutrum interdum. Quisque
            hendrerit, mi eu fermentum pretium, nibh est sollicitudin orci, eu
            dapibus nibh justo ut risus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Aenean eget
            tristique mi, facilisis scelerisque quam. Phasellus dictum molestie
            erat, sed vulputate eros interdum a. Sed faucibus urna a ornare
            molestie. Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
            dignissim.
          </p>
        </div>
      }
      images={[]}
    />
    <AboutBanner
      flipped
      heading="Where We're Heading"
      body={
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id. Donec eu ligula nec ante rutrum interdum. Quisque
            hendrerit, mi eu fermentum pretium, nibh est sollicitudin orci, eu
            dapibus nibh justo ut risus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Aenean eget
            tristique mi, facilisis scelerisque quam. Phasellus dictum molestie
            erat, sed vulputate eros interdum a. Sed faucibus urna a ornare
            molestie. Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
            dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id. Donec eu ligula nec ante rutrum interdum. Quisque
            hendrerit, mi eu fermentum pretium, nibh est sollicitudin orci, eu
            dapibus nibh justo ut risus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Aenean eget
            tristique mi, facilisis scelerisque quam. Phasellus dictum molestie
            erat, sed vulputate eros interdum a. Sed faucibus urna a ornare
            molestie. Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
            dignissim.
          </p>
        </div>
      }
      images={[]}
    />
    <AboutBanner
      heading="Founder's Outlook"
      body={
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id. Donec eu ligula nec ante rutrum interdum. Quisque
            hendrerit, mi eu fermentum pretium, nibh est sollicitudin orci, eu
            dapibus nibh justo ut risus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Aenean eget
            tristique mi, facilisis scelerisque quam. Phasellus dictum molestie
            erat, sed vulputate eros interdum a. Sed faucibus urna a ornare
            molestie. Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
            dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies est sit amet libero iaculis, in congue lectus imperdiet.
            Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio
            pretium hendrerit. Cras feugiat porttitor quam, eu molestie libero
            tincidunt id. Donec eu ligula nec ante rutrum interdum. Quisque
            hendrerit, mi eu fermentum pretium, nibh est sollicitudin orci, eu
            dapibus nibh justo ut risus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Aenean eget
            tristique mi, facilisis scelerisque quam. Phasellus dictum molestie
            erat, sed vulputate eros interdum a. Sed faucibus urna a ornare
            molestie. Phasellus ac dolor ipsum. Etiam aliquam nisl et semper
            dignissim.
          </p>
          <div className={styles.cta}>
            <a
              href="https://au.linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      }
      images={[]}
    />
  </Page>
);

export default About;
