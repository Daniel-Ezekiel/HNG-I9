const Link = ({ id, url, name }) => {
    return (
        <a id={id} 
           href={url}
           className="link"
           target="_blank"
           rel="noreferrer">
            {name}
        </a>
    )
}

Link.defaultProps = {
    subText: ''
}

export default Link;