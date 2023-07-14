function Avatar({name, imageUrl, imageSize}) {
    return(
        <div>
            <h2>{name}</h2>
            <img
                src={imageUrl}
                alt={name}
                width={imageSize}
            />
        </div>
    );
};

export default Avatar;