import ProfileInfo from '../components/ProfileInfo';
import ExternalLinks from '../components/ExternalLinks';
import Footer from '../components/Footer';

export const Home = () => {
  return (
      <main>
        <ProfileInfo elementId="user-info"/>
        
        <ExternalLinks />

        <Footer />
      </main>
  );
}

export default Home;