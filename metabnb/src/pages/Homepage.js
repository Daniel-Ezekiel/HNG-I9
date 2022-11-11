import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Homes from '../components/Homes'
import Nft from '../components/Nft';

export const Homepage = () => {
    return (
        <main>
            <Hero />
            <Banner />
            <Homes />
            <Nft />
        </main>
    );
}

export default Homepage;