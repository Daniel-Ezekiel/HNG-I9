import AllHomes from "../components/AllHomes";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import '../placetostay.css'

export const PlaceToStay = () => {
    const categories = ['Restaurant', 'Cottage', 'Castle', 'Fantast City', 'Beach', 'Cabin', 'Off-Grid', 'Farm'];

    const homeImgs = ['card-img5', 'card-img6', 'card-img7', 'card-img8', 'card-img1', 'card-img2', 'card-img3', 'card-img4', 'card-img9', 'card-img10', 'card-img11', 'card-img12', 'card-img13', 'card-img14', 'card-img15', 'card-img16']

    return (
        <section id="all-homes-section">
            <div className="location-categories">
                <ul>
                    {categories.map( (location, id) => <li key={id}><Link to="#">{location}</Link></li> )}
                </ul>

                <Search className="location-search" placeholder="Location" btnName={<img src="img/filter.png" alt="icon" />}/>
            </div>
            <AllHomes homeImgs={homeImgs}/>
        </section>
    );
}

export default PlaceToStay;