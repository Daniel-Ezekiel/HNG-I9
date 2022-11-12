import { Link } from 'react-router-dom';
import Image from './Image';
import '../nav.css';

const Header = () => {    
    const showMenu = () => {
        const menuBtn = document.querySelector('.nav-btn');
        const menuBar = document.querySelector('.hamburger');
        const menuList = document.querySelector('.nav-menu');
        
        menuBtn.classList.toggle('is-active');
        menuBar.classList.toggle('is-active');
        menuList.classList.toggle('is-active');
    }

    const showModal = (e) => {
		const modal = document.querySelector('.modal-overall-container');

		modal.classList.add('active');
		console.log(e)
	}

    return (
        <header>
            <nav>
                <div className='logo'>
                    <Image imgSrc={"img/metabnb-logo.png"} />
                </div>

                <ul className='nav-menu'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/placetostay">Place to Stay</Link></li>
                    <li><Link to="/#nft-section">NFTs</Link></li>
                    <li><Link to="/#">Community</Link></li>
                    <li>
                        <Link to="/#">
                            <button className='connect-btn' onClick={showModal}>
                                Connect Wallet
                            </button>
                        </Link>
                    </li>
                </ul>

                <button type="button" className="nav-btn" onClick={showMenu}>
                    <div className="hamburger"></div>
                </button>
            </nav>
        </header>
    )
}

export default Header