const Link = ({ id, url, title, subText }) => {
    return (
        <a id={id} href={url}>
            {title}
            {subText ? <p className="link-description">{subText}</p> : <>{subText}</>}
        </a>
    )
}

Link.defaultProps = {
    subText: ''
}

export default Link;