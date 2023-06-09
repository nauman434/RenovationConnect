import React from 'react';
import { Home, Gallery, Projects, Services, RequestQuote } from "./pages";
import { Footer, Navbar } from "./components/Global";
import styles from './style';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.paddingY} overflow-hidden`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
        <Route path='/request-a-quote' element={<RequestQuote />} />
      </Routes>
      <div className={`${styles.paddingX} ${styles.paddingY} overflow-hidden bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App