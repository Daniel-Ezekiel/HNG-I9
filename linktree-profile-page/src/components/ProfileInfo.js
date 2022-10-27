import ProfileImage from "./ProfileImage";

const ProfileInfo = ({elementId}) => {
    return (
        <section id={elementId}>
            <ProfileImage imgUrl="https://danielezekiel.me/img/profile.webp" />
        </section>
    );
}

export default ProfileInfo;