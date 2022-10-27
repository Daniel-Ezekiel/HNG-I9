import ProfileImage from "./ProfileImage";

const ProfileInfo = ({elementId}) => {
    return (
        <section id={elementId}>
            <ProfileImage imgUrl="https://danielezekiel.me/img/profile.webp" />

            <h1>Daniel Ezekiel</h1>
        </section>
    );
}

export default ProfileInfo;