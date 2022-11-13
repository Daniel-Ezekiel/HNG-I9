import AllHomes from "../components/AllHomes";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import '../placetostay.css'

export const PlaceToStay = () => {
    const categories = ['Restaurant', 'Cottage', 'Castle', 'Fantast City', 'Beach', 'Cabin', 'Off-Grid', 'Farm'];

    return (
        <section id="all-homes-section">
            <div className="location-categories">
                <ul>
                    {categories.map( (location, id) => <li key={id}><Link to="#">{location}</Link></li> )}
                </ul>

                <Search className="location-search" placeholder="Location" btnName={<img src="img/filter.png" alt="icon" />}/>
            </div>
            <AllHomes />
        </section>
    );
}

export default PlaceToStay;