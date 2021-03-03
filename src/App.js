import React, { useState, useCallback, useEffect } from 'react';

import mobileChecking from './util/mobileChecking';
// import throttle from './util/throttle';

import './styles/style.css';
import Header from './components/Header';
import MyPage from './components/MyPage';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(mobileChecking());

  const onResize = useCallback((e) => {
    // throttler.current.throttle(() => {
    setIsMobile(mobileChecking());
    // }, 700);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
  }, []);

  console.log(isMobile, 'isMobile');

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <MyPage isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default App;
