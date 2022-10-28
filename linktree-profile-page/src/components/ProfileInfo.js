import Image from "./Image";

const ProfileInfo = ({elementId}) => {
    return (
        <section id={elementId}>
            <a href="#">
                <img className="share-mobile" src="./img/share_mobile.svg" />
                <img className="share-desktop" src="./img/share_desktop.svg" />
            </a>

            <Image id="profile__img" imgUrl="https://danielezekiel.me/img/profile.webp" alt="Daniel Ezekiel" />

            <h1>Daniel Ezekiel</h1>
        </section>
    );
}

export default ProfileInfo;