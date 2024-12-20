import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import './Navbar.css';  // Import the CSS file
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [position, setPosition] = useState({
        top: 0,
        right: 0,
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <div className="slide-tabs-container">
            <ul
                onMouseLeave={() => {
                    setPosition((pv) => ({
                        ...pv,
                        opacity: 0,
                    }));
                }}
                className="slide-tabs"
            >
                <NavTab setPosition={setPosition} to="/">Home</NavTab>
                <NavTab setPosition={setPosition} to="/Dashboard">Dashboard</NavTab>
                <NavTab setPosition={setPosition} to="/Education">Education</NavTab>
                <NavTab setPosition={setPosition} to="/Marketplace">Marketplace</NavTab>
                <NavTab setPosition={setPosition} to="/Community">Community</NavTab>

                <Cursor position={position} />
            </ul>
        </div>
    );
};

const NavTab = ({ children, setPosition, to }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="tab"
        >
            {/* Apply Framer Motion animation to NavLink */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <NavLink to={to} activeClassName="active" className="nav-link">
                    {children}
                </NavLink>
            </motion.div>
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="cursor"
        />
    );
};

export default Navbar;
