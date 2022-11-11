import Search from "./Search";
import Image from "./Image";
// import Button from "./Button";

const Hero = () => {
    return (
        <section id="hero-section">
            <div>
                <p>Rent a <strong>Place</strong> away from <strong>Home</strong> in the <strong>Metaverse</strong></p>

                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                <Search />
            </div>

            <div>
                <Image imgSrc="img/main-img.png" />
            </div>
        </section>
    );
}

export default Hero;