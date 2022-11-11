const Button = ( {id, url, linkName} ) => {
    return (
        <a id={id} href={url}>{linkName}</a>
    );
}

export default Button;