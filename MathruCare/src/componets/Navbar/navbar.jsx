import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/SignIn/logo.webp';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 56, md: 74 },
                bgcolor: 'rgba(255, 255, 255, 1)',
                boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: 2, sm: 3, md: 4 },
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            {/* Logo + Brand */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                    component="img"
                    src={logoImg}
                    alt="MathruCare Logo"
                    sx={{ width: { xs: 28, md: 36 }, height: 'auto' }}
                />
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '16px', md: '20px' },
                        color: '#1a1a1a',
                        fontFamily: "'Poppins', sans-serif",
                    }}
                >
                    MathruCare
                </Typography>
            </Box>

            {/* Right Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
                <IconButton sx={{ color: '#555', p: { xs: 0.5, md: 1 }, left: { xs: '-20px',sm: '-30px',md: '-40px', lg: '-70px' } }}>
                    <NotificationsNoneOutlinedIcon sx={{ fontSize: { xs: 22, md: 26 } }} />
                </IconButton>

                <Button
                    onClick={handleLogout}
                    variant="outlined"
                    startIcon={<LogoutIcon sx={{ fontSize: 18 }} />}
                    sx={{
                        borderRadius: '8px',
                        borderColor: '#3DC664',
                        color: '#3DC664',
                        textTransform: 'none',
                        left: { xs: '-20px',sm: '-30px',md: '-40px', lg: '-70px' },
                        fontWeight: 600,
                        fontSize: { xs: '12px', md: '14px' },
                        px: { xs: 1.5, md: 2 },
                        py: 0.5,
                        fontFamily: "'Poppins', sans-serif",
                        '&:hover': {
                            bgcolor: 'rgba(61,198,100,0.08)',
                            borderColor: '#35b058',
                        },
                    }}
                >
                    Log out
                </Button>
            </Box>
        </Box>
    );
};

export default Navbar;
