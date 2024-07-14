import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
    {
        link: '/',
        text: 'Home',
        id: 1,
    },
    {
        link: '/Contact',
        text: 'Contacto',
        id: 2,
    },
    {
        link: '/About',
        text: 'About Us',
        id: 3,
    },
    {
        link: '/Page',
        text: 'Page',
        id: 4,
    }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowDimention, setWindowDimention] = useState({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
    });
    const detectSize = () => {
        setWindowDimention({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth
        });
    };

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.addEventListener('resize', detectSize);
        };
    }, [windowDimention])

    return <div className="flex px-4 justify-center bg-slate-500">
        <Link to={"/"} className="text-white font-semibold text-xl p-2">Logo</Link>
    </div>
}
export default Navbar;