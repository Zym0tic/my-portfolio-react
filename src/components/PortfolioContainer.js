import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './header';
import Footer from './footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <section className='row'>
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </section> 
      {renderPage()}
      <Footer />
    </div>
  );
}
