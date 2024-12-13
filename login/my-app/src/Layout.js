import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Layout.css";

import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Store the current URL before redirecting to the login page
        localStorage.setItem('redirectURL', window.location.pathname);
        // Redirect to the login page
        navigate("/login");
    };
    return (
        <div className="menu">
            <Button variant="outlined" style={{ fontFamily: 'newfont, sans-serif', weight: 600 }}
                href="/">
                Home
            </Button>

            <Button variant="outlined" style={{ fontFamily: 'newfont, sans-serif', weight: 600 }}
                onClick={handleClick}
                href="/login">
                Login
            </Button>

            <Button variant="outlined" style={{ fontFamily: 'newfont, sans-serif', weight: 600 }}
                href="/redirectPage">
                Blogs
            </Button>

            <Button variant="outlined" style={{ fontFamily: 'newfont, sans-serif', weight: 600 }}
                href="/imageCaption">
                Caption Image
            </Button>

            <Outlet />
        </div>
    )
};

export default Layout;