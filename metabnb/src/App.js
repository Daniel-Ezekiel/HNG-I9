import { Homepage } from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import PlaceToStay from './pages/PlaceToStay';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/placetostay' element={ <PlaceToStay /> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;