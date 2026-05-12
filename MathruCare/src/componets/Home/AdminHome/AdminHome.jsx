import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../../Navbar/navbar';

const AdminHome = () => {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f0f4f8', fontFamily: "'Poppins', sans-serif" }}>
            <Navbar />
            <Box sx={{ pt: '100px', textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                    Admin Dashboard
                </Typography>
                <Typography sx={{ mt: 2, color: '#666' }}>
                    Welcome to the MathruCare Admin Portal. This is a placeholder for your dashboard.
                </Typography>
            </Box>
        </Box>
    );
};

export default AdminHome;
