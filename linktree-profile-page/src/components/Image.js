const Image = ({id, imgUrl, alt}) => {
    return (
        <img id={id} 
             src={imgUrl} 
             alt={alt}
        />
    )
}

export default Image;