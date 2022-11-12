import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Homes from '../components/Homes'
import Nft from '../components/Nft';
import Modal from '../components/Modal';

export const Homepage = () => {

    return (
        <main>
            <Hero />
            <Modal/>
            <Banner />
            <Homes />
            <Nft />
        </main>
    );
}

export default Homepage;