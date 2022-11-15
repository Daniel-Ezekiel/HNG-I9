import Image from "./Image";
import FooterNavBox from "./FooterNavBox";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const communityLinks = ['NFT', 'Tokens', 'Landlords', 'Discord'];
  const placesLinks = ['Castle', 'Farms', 'Beach', 'Learn more'];
  const aboutUsLinks = ['Roadmaps', 'Creators', 'Career', 'Contact us'];

  return (
    <footer>
        <section className="footer-nav">
            <div className="metabnb-profile">
                <Link to="/">
                  <Image imgSrc={"img/metabnb-logo1.png"} />
                </Link>

                <div className='social-icons'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>

            <FooterNavBox navTitle="Community" navLinks={communityLinks} />
            <FooterNavBox navTitle="Places" navLinks={placesLinks} />
            <FooterNavBox navTitle="About Us" navLinks={aboutUsLinks} />
        </section>

        <p>&copy; 2022 Metabnb</p>
    </footer>
  )
}

export default Footer