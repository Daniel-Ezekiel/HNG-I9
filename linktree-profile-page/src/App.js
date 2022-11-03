import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>  

      <Footer />  
    </>
  );
}

export default App;