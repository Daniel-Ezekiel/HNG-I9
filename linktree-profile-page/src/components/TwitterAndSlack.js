const TwitterAndSlack = ({ icon, platform }) => {
    return (
            <div className="twt-slk">
                <a href="https://twitter.com/db_ezekiel">
                    {icon}
                    {platform}
                </a>
            </div>
    )
}

export default TwitterAndSlack;