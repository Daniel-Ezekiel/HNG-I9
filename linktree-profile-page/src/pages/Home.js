import ProfileInfo from '../components/ProfileInfo';
import ExternalLinks from '../components/ExternalLinks';

export const Home = () => {
  return (
      <main>
        <ProfileInfo elementId="user-info"/>
        
        <ExternalLinks />
      </main>
  );
}

export default Home;