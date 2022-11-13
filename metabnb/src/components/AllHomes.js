import Home from "./Home";
import { FaStar } from 'react-icons/fa';

const AllHomes = () => {
    const rating = <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>

  return (
    <div className="all-homes">
        <div className="homes-container">
                <Home cardName="card-img1"
                      homeName="Desert king"
                      homePrice="1MBT"
                      homeDistance="2345km" 
                      homeAvailability="available for 2weeks stay"
                      homeRating={rating} 
                />
            </div>

            <div className="homes-container">
                <Home cardName="card-img2"
                      homeName="Desert king"
                      homePrice="1MBT"
                      homeDistance="2345km" 
                      homeAvailability="available for 2weeks stay"
                      homeRating={rating} 
                />
            </div>

            <div className="homes-container">
                <Home cardName="card-img3"
                      homeName="Desert king"
                      homePrice="1MBT"
                      homeDistance="2345km" 
                      homeAvailability="available for 2weeks stay"
                      homeRating={rating} 
                />
            </div>

            <div className="homes-container">
                <Home cardName="card-img4"
                      homeName="Desert king"
                      homePrice="1MBT"
                      homeDistance="2345km" 
                      homeAvailability="available for 2weeks stay"
                      homeRating={rating} 
                />
            </div>

            <div className="homes-container">
                <Home cardName="card-img5"
                      homeName="Desert king"
                      homePrice="1MBT"
                      homeDistance="2345km" 
                      homeAvailability="available for 2weeks stay"
                      homeRating={rating} 
                />
            </div>

            <div className="homes-container">
                <Home cardName="card-img6"
                      homeName="Desert king"
                      homePrice="1MBT"
                      homeDistance="2345km" 
                      homeAvailability="available for 2weeks stay"
                      homeRating={rating} 
                />
            </div>

            <div className="homes-container">
                <Home cardName="card-img7"
                      homeName="Desert king"
                      homePrice="1MBT"
                      homeDistance="2345km" 
                      homeAvailability="available for 2weeks stay"
                      homeRating={rating} 
                />
            </div>

            <div className="homes-container">
                <Home cardName="card-img8"
                      homeName="Desert king"
                      homePrice="1MBT"
                      homeDistance="2345km" 
                      homeAvailability="available for 2weeks stay"
                      homeRating={rating} 
                />
            </div>
    </div>
  )
}

export default AllHomes