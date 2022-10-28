const Link = ({ id, url, title }) => {
    return (
        <a id={id} 
           href={url}
           className="link"
           target="_blank">
            {title}
        </a>
    )
}

Link.defaultProps = {
    subText: ''
}

export default Link;