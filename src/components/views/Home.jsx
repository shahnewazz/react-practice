import Author from "../Author";
import Avatar from "../Avatar";
import Gallery, { FeaturedImage } from "../Gallery";
import Welcome from "../Welcome";

const author = {
  name: "John Doe",
  bio: "A passionate developer and blogger."
}

const Home = () => {
    return (
        <>
            <Welcome />
            <FeaturedImage />
            <Gallery />
            <Author name={author.name} bio={author.bio}>
                <Avatar src="./avatar/01.jpg" alt={author.name} />
            </Author>
        </>
    );
};

export default Home;