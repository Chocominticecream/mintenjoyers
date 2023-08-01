import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/redirect-page">Redirect</Link>
                </li>
                <li>
                    {/*<Link to="/contact">Contact</Link>*/}
                </li>
                {/* Add more navigation links here */}
            </ul>
        </nav>
    );
};

export default Navigation;