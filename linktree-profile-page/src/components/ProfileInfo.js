import Image from "./Image";

const ProfileInfo = ({elementId}) => {
    return (
        <section id={elementId}>
            <Image id="profile__img" imgUrl="https://danielezekiel.me/img/profile.webp" alt="Daniel Ezekiel" />

            <h1>Daniel Ezekiel</h1>
        </section>
    );
}

export default ProfileInfo;