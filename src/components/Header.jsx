
const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
];

const Header = () => {
    return (
        <>
            <header className="bg-blue-600 text-white p-4">
                <div className="container mx-auto p-4 flex justify-between items-center">
                    <div className="">
                        <h1 className="text-2xl font-bold">My Website</h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:underline">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    );
};

export default Header;