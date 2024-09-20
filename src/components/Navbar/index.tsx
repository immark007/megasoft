import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        if (window.innerWidth > 758) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="w-full py-3 items-center bg-white sticky top-0 z-50">
            <nav className="flex flex-row justify-around items-center w-full">

                <div className="hidden md:flex flex-row gap-10 text-colorNav">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>

                <div>
                    <h1 className="font-bold text-2xl text-colorTitle" style={{ fontFamily: 'Roboto, sans-serif' }}>MegaSoft</h1>
                </div>
                
                <div className="hidden md:block">
                    <button className="flex justify-center w-40 py-1 bg-colorButton rounded-sm text-white">Buy Now</button>
                </div>

                <div className="fixed top-5 right-5 z-50 md:hidden">
                    <button onClick={toggleMenu}>
                        <FontAwesomeIcon className='text-2xl' icon={isMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </nav>

            <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center justify-center gap-5 p-5`}>
                <a href="#" className='text-2xl hover:text-colorButton transition-colors duration-200'>Home</a>
                <a href="#" className='text-2xl hover:text-colorButton transition-colors duration-200'>About</a>
                <a href="#" className='text-2xl hover:text-colorButton transition-colors duration-200'>Contact</a>

                <button className="w-40 py-2 bg-colorButton text-white rounded-sm hover:bg-white hover:text-colorButton border-colorButton border-2 transition-all duration-200">Buy Now</button>
            </div>
        </header>
    );
}
