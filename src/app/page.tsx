import React from 'react';
import Banner1 from '../components/UI/banners/banner1'; // Ensure this is the correct path and export
import Banner2 from '../components/UI/banners/banner2'; // Ensure this is the correct path and export
import Banner3 from '../components/UI/banners/banner3'; // Ensure this is the correct path and export
import Footer from '../components/UI/footer';

export default function HomePage() {
  return (
    <div>
      <Banner1 />
      <Banner2 />
      <Banner3/>
      <Footer/>
    </div>
  );
};
