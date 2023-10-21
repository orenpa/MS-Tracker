import React from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Your page components
import Home from '../pages/Home';
import Dailies from '../pages/Dailies';
import Gear from '../pages/Gear';

function NavBar() {
    return (
        <Router>
            <AppBar position="static" color="primary">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="logo" style={{ height: '35px', marginRight: '10px' }} />
                    </Link>
                    <Tabs>
                        <Tab label="Home" component={Link} to="/" sx={{ color: 'white' }} />
                        <Tab label="Dailies" component={Link} to="/dailies" sx={{ color: 'white' }} />
                        <Tab label="Gear" component={Link} to="/gear" sx={{ color: 'white' }} />
                    </Tabs>
                </Box>
            </AppBar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dailies" element={<Dailies />} />
                <Route path="/gear" element={<Gear />} />
            </Routes>
        </Router>
    );
}

export default NavBar;
