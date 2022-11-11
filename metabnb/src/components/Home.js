import Image from "./Image";
import '../card.css'

const Home = ( {cardName, homeName, homePrice, homeDistance, homeAvailability, homeRating} ) => {
    return (
        <div className="home-card">
            <Image imgSrc={`img/card-imgs/${cardName}.png`} />

            <div className="home-info">
                <span>{homeName}</span>
                <span>{homePrice} per night</span>
                <span>{homeDistance} away</span>
                <span>{homeAvailability}</span>
                <span>{homeRating}</span>
            </div>
        </div>
    );
}

// Home.defaultProps = {
//     cardName: 
// }

export default Home;