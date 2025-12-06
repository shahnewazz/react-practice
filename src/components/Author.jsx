
const Author = ({name, bio, children}) => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">About the Author</h2>
            <div className="flex items-center space-x-4">
                {children}
                <div className="">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="mt-2 text-gray-700">{bio}</p>
                </div>
            </div>
            
        </>
    );
};

export default Author;