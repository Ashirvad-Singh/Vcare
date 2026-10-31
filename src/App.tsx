import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { TopBar } from './components/common/TopBar';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { RouteScrollToTop } from './components/common/RouteScrollToTop';
import { Preloader } from './components/common/Preloader';
import { AppRoutes } from './routes/AppRoutes';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  useSmoothScroll();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <RouteScrollToTop />
        <Preloader onComplete={() => setPreloaderDone(true)} />
        
        <div className="flex flex-col min-h-screen bg-soft text-slate-800 font-sans selection:bg-cyan-400 selection:text-navy-950">
          <TopBar />
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
