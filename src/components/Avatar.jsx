
const Avatar = ({src, alt}) => {
    return (
        <>
            <img src={src} alt={alt} className="w-20 h-20 rounded-full" />
        </>
    );
};

export default Avatar;