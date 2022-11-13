import Home from "./Home";
import { FaStar } from 'react-icons/fa';

const AllHomes = ( {homeImgs} ) => {
    const rating = <><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></>

  return (
    <div className="all-homes">
        {homeImgs.map( (item, id) => {
                return (
                    <div className="homes-container">
                        <Home key={id} cardName={item}
                                            homeName="Desert king"
                                            homePrice="1MBT"
                                            homeDistance="2345km" 
                                            homeAvailability="available for 2weeks stay"
                                            homeRating={rating} 
                                        />
                    </div>
                );
            } 
        )}
    </div>
  )
}

export default AllHomes