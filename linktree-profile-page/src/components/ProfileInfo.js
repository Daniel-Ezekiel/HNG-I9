import Image from "./Image";

const ProfileInfo = ({elementId}) => {
    return (
        <section id={elementId}>
            <button className="share-btn">
                <img className="share-mobile" src="./img/share_mobile.svg" alt=""/>
                <img className="share-desktop" src="./img/share_desktop.svg" alt=""/>
            </button>

            <Image id="profile__img" imgUrl="https://danielezekiel.me/img/profile.webp" alt="Daniel Ezekiel" />

            <h1>Daniel Ezekiel</h1>
        </section>
    );
}

export default ProfileInfo;