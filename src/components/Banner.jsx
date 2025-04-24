import React from 'react';
import bannerImg from '../assets/images/banner.png';

const Banner = () => {
  return (
    <section id="home" className="banner w-full">
      <img src={bannerImg} alt="Banner" className="w-full object-cover" />
    </section>
  );
};

export default Banner;
