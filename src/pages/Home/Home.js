import React, { useEffect } from 'react'; // Corrected import syntax
import Products from './Products';
import HomeSec1 from './HomeSec1';
import HomeSec2 from './HomeSec2';
import HomeSec3 from './HomeSec3';
import HomeSec4 from './HomeSec4';
import Contact from '../Contact/Contact';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  return (
    <>
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
      <HomeSec4 />
      <Products />
      <Contact />
    </>
  );
}

export default Home;