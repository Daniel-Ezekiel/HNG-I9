const Link = ({ id, url, name, title }) => {
    return (
        <a id={id} 
           href={url}
           title={title}
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