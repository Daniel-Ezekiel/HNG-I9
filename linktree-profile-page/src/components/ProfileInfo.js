import Image from "./Image";

const ProfileInfo = ({elementId}) => {
    return (
        <section id={elementId}>
            <img className="share-button" src="./img/share_mobile.svg" />
            <img className="icon-button" src="./img/share_desktop.svg" />

            <Image id="profile__img" imgUrl="https://danielezekiel.me/img/profile.webp" alt="Daniel Ezekiel" />

            <h1>Daniel Ezekiel</h1>
        </section>
    );
}

export default ProfileInfo;