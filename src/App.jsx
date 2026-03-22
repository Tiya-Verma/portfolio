import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero, Navbar } from './components';
import { useEffect, useState } from 'react';
import IceCreamTruckCanvas from './components/canvas/IceCreamTruckCanvas';
import PreLoader from './components/PreLoader';
import ProjectsPage from './components/ProjectsPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading ? (
        <PreLoader onLoadComplete={handleLoadComplete} />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative z-0 bg-primary">
                <div>
                  <Navbar />
                  <div className="relative h-screen">
                    <Hero />
                    <div className="absolute inset-0 z-0">
                      <IceCreamTruckCanvas />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
