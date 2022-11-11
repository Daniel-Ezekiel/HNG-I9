import Button from "./Button";
import Image from "./Image";

const Nft = () => {
  return (
    <section id="nft-section">
        <div className="nft-info">
            <h2>Metabnb NFTs</h2>

            <p>
                Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
            </p>

            <Button id="btn__learn-more" url="/#nft-section" linkName="Learn More" />
        </div>

        <div>
            <Image imgSrc={"img/nft-section-img.png"} />
        </div>
    </section>
  )
}

export default Nft