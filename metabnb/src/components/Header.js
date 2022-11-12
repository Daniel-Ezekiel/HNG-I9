import { Link } from 'react-router-dom';
import Image from './Image';
import '../nav.css';
import '../nav.js'

const Header = () => {
    
    return (
        <header>
            <nav>
                <div className='logo'>
                    <Image imgSrc={"img/metabnb-logo.png"} />
                </div>

                <ul className='nav-menu'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#homes-section">Place to Stay</Link></li>
                    <li><Link to="/#nft-section">NFTs</Link></li>
                    <li><Link to="/#">Community</Link></li>
                </ul>

                <button type="button" className="nav-btn">
                    <div className="hamburger"></div>
                </button>
            </nav>
        </header>
    )
}

export default Header