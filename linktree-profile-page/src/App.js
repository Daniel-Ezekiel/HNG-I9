import ProfileInfo from './components/ProfileInfo';
import ExternalLinks from './components/ExternalLinks';

function App() {
  return (
    <div className="App">
      <main>
        <ProfileInfo elementId="user-info"/>
        
        <ExternalLinks />
      </main>
    </div>
  );
}

export default App;