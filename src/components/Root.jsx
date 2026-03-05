import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const Root = () => {
    return (
        <>
            <Header />
                <div className="container mx-auto p-4">
                    <Outlet />
                </div>
            <Footer />
        </>
    );
};

export default Root;