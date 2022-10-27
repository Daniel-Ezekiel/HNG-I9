import ProfileInfo from './components/ProfileInfo';
import ExternalLinks from './components/ExternalLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <ProfileInfo elementId="user-info"/>
        
        <ExternalLinks />

        <Footer />
      </main>
    </div>
  );
}

export default App;