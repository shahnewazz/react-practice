import Footer from '../Footer';
import Header from '../Header';

const Master = ({children}) => {
    return (
        <>
            <Header />
                <div className="container mx-auto p-4">
                    {children}
                </div>
            <Footer />
        </>
    );
};

export default Master;