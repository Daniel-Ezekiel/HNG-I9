import { Homepage } from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Homepage /> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;