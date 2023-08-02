import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Button variant="outlined"
                href="/">
                Home
            </Button>

            <Button variant="outlined"
                href="/login">
                Login
            </Button>

            <Button variant="outlined"
                href="/redirectPage">
                Blogs
            </Button>

            <Button variant="outlined"
                href="/imageCaption">
                Caption Image
            </Button>

            <Outlet />
        </>
    )
};

export default Layout;