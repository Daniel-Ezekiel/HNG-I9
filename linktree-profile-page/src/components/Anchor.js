const Anchor = ({ id, url, name, title }) => {
    return (
        <a id={id} 
           href={url}
           title={title}
           className="link"
           target={id !== 'contact' ? "_blank" : ""}
           rel="noreferrer">
            {name}
        </a>
    )
}

Anchor.defaultProps = {
    subText: ''
}

export default Anchor;