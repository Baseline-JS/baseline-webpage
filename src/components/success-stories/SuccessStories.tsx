import React from 'react';
import Slider from 'react-slick';
import styles from './success-stories.module.scss';

interface Story {
  image: string;
  name: string;
  organization: string;
  review: string;
}

const stories: Story[] = [
  {
    image: '/baseline-icon-black.svg',
    name: 'Name',
    organization: 'Organization',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies est sit amet libero iaculis, in congue lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio pretium hendrerit.',
  },
  {
    image: '/baseline-icon-black.svg',
    name: 'Name',
    organization: 'Organization',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies est sit amet libero iaculis, in congue lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio pretium hendrerit.',
  },
  {
    image: '/baseline-icon-black.svg',
    name: 'Name',
    organization: 'Organization',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies est sit amet libero iaculis, in congue lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio pretium hendrerit.',
  },
  {
    image: '/baseline-icon-black.svg',
    name: 'Name',
    organization: 'Organization',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies est sit amet libero iaculis, in congue lectus imperdiet. Ut a lacinia urna, vel consequat justo. Ut volutpat elit in odio pretium hendrerit.',
  },
];

const SuccessStories = (): JSX.Element => (
  <div className={styles.successStories}>
    <div className={styles.successStoriesContent}>
      <h1>Success Stories</h1>
      <Slider
        dots={false}
        arrows
        slidesToShow={3}
        slidesToScroll={1}
        infinite
        responsive={[
          { breakpoint: 992, settings: { slidesToShow: 1 } },
          { breakpoint: 1200, settings: { slidesToShow: 2 } },
        ]}
      >
        {stories.map((story) => (
          <div className={styles.storyWrapper} key={story.organization}>
            <div className={styles.story}>
              <img src={story.image} alt={story.name} />
              <div className={styles.name}>{story.name}</div>
              <div className={styles.name}>{story.organization}</div>
              <div className={styles.review}>{story.review}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default SuccessStories;
