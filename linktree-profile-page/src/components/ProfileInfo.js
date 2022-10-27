import ProfileImage from "./ProfileImage";
import TwitterAndSlack from "./TwitterAndSlack";

import { FaTwitter } from 'react-icons/fa';
import { FaSlack } from 'react-icons/fa';

const ProfileInfo = ({elementId}) => {
    return (
        <section id={elementId}>
            <ProfileImage imgUrl="https://danielezekiel.me/img/profile.webp" />

            <h1>Daniel Ezekiel</h1>

            <div>
                <TwitterAndSlack icon={<FaTwitter />} platform="Twitter"/>
                <TwitterAndSlack icon={<FaSlack />}  platform="Slack"/>
            </div>
        </section>
    );
}

export default ProfileInfo;