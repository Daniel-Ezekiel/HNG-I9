import { Homepage } from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;