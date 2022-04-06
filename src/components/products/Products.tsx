import React from 'react';
import Product from './product/Product';
import styles from './products.module.scss';

const Products = (): JSX.Element => (
  <div className={styles.products}>
    <h1>Showcase</h1>
    <Product
      slides={[
        {
          leftContent: (
            <div>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          rightContent: (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          image: '',
        },
        {
          leftContent: (
            <div>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          rightContent: (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          image: '',
        },
        {
          leftContent: (
            <div>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          rightContent: (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          image: '',
        },
        {
          leftContent: (
            <div>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          rightContent: (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          image: '',
        },
        {
          leftContent: (
            <div>
              <h1>Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          rightContent: (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultricies est sit amet libero iaculis, in congue
                lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut
                volutpat elit in odio pretium hendrerit. Cras feugiat porttitor
                quam, eu molestie libero tincidunt id. Donec eu ligula nec ante
                rutrum interdum.
              </p>
            </div>
          ),
          image: '',
        },
      ]}
    />
  </div>
);

export default Products;
