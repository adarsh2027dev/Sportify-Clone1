import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import './App.css';
import Navbaar from './component1/Navbaar';
import Aside from './component1/Aside';
import Section from './component1/Section';
import Footer from './component1/Footer';

function LayoutBasedOnRoute() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHome = currentPath === '/';

  return (
    <>
      {isHome && <Navbaar />}
      <AnimatedRoutes />
      {isHome && (
        <>
          <div className='flex flex-row'>
            <Section />
            <Aside />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutBasedOnRoute />
    </Router>
  );
}

export default App;
