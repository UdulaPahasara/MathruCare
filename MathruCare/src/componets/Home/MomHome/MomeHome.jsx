import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../../Navbar/navbar';

// Navigation icons
import homeIcon from '../../../assets/Home/MomHome/mynaui_home.webp';
import nutritionIcon from '../../../assets/Home/MomHome/nutrition.webp';
import moodIcon from '../../../assets/Home/MomHome/mood check.webp';
import announcementIcon from '../../../assets/Home/MomHome/annousment.webp';
import profileIcon from '../../../assets/Home/MomHome/profile.webp';
import profilePic from '../../../assets/Home/MomHome/profilePic.webp';

const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: homeIcon },
    { id: 'nutrition', label: 'Nutrition', icon: nutritionIcon },
    { id: 'moodTracking', label: 'Mood Tracking', icon: moodIcon },
    { id: 'announcements', label: 'Announcements', icon: announcementIcon },
    { id: 'profile', label: 'Profile', icon: profileIcon },
];

const MomHome = () => {
    const [activeNav, setActiveNav] = useState('dashboard');

    // Placeholder: in a real app, fetch this from API/context
    const motherName = 'Sithara Perera';
    const mohDivision = 'Homagama MOH';
    const weeksPregnant = 23;
    const weeksToGo = 40 - weeksPregnant;

    return (
        <Box
            sx={{
                
                width: '100%',
                bgcolor: '#EDFFF1',
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Main Content — offset by navbar height */}
            <Box
                sx={{
                    pt: { xs: '56px', md: '74px' },
                    px: { xs: 2, sm: 3, md: 4, lg: 5 },
                    pb: 4,
                    display: 'flex',
                    gap: { xs: 2, md: 3 },
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'stretch', md: 'flex-start' },
                    maxWidth: '1440px',
                    margin: '0 auto',
                }}
            >
                {/* ─── Sidebar ─────────────────────────────── */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '300px' },
                        flexShrink: 0,
                        bgcolor: 'rgba(255, 255, 255, 1)',
                        borderRadius: '14px',
                        mt: { xs: 2, md: '31px' },  
                        overflow: 'hidden',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    }}
                >
                    {/* Profile Box */}
                    <Box
                        sx={{
                            mx: '28px',
                            mt: '40px',
                            pb: '30px',
                            borderBottom: '1px solid #E5E7EB',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '14px',
                        }}
                    >
                        <Box
                            component="img"
                            src={profilePic}
                            alt="Profile"
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '15px',
                                    color: '#1a1a1a',
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                {motherName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: '#888',
                                    fontFamily: "'Poppins', sans-serif",
                                    mt: 0.2,
                                }}
                            >
                                {mohDivision}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Navigation Items */}
                    <Box
                        sx={{
                            mx: '28px',
                            mt: '20px',
                            mb: '28px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        {navItems.map((item) => {
                            const isActive = activeNav === item.id;
                            return (
                                <Box
                                    key={item.id}
                                    onClick={() => setActiveNav(item.id)}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        px: '12px',
                                        py: '10px',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        bgcolor: isActive ? 'rgba(61,198,100,0.08)' : 'transparent',
                                        border: isActive ? '1.5px dashed #3DC664' : '1.5px solid transparent',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            bgcolor: 'rgba(61,198,100,0.06)',
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.icon}
                                        alt={item.label}
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            objectFit: 'contain',
                                            opacity: isActive ? 1 : 0.7,
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: isActive ? 600 : 500,
                                            color: isActive ? '#219140' : '#444',
                                            fontFamily: "'Poppins', sans-serif",
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                {/* ─── Main Area ────────────────────────────── */}
                <Box sx={{ flexGrow: 1, mt: { xs: 0, md: '31px' } }}>
                    {/* Hello Banner */}
                    <Box
                        sx={{
                            width: '90%',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #3DC664 0%, #219140 100%)',
                            px: { xs: '20px', md: '30px' },
                            py: { xs: '16px', md: '20px' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: '0 4px 16px rgba(61,198,100,0.25)',
                        }}
                    >
                        {/* Left: Greeting */}
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '20px', md: '26px' },
                                    color: '#fff',
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                Hello, {motherName.split(' ')[0]}!
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '12px', md: '14px' },
                                    color: 'rgba(255,255,255,0.9)',
                                    fontFamily: "'Poppins', sans-serif",
                                    mt: 0.3,
                                }}
                            >
                                You're in week {weeksPregnant} of your pregnancy journey.
                            </Typography>
                        </Box>

                        {/* Right: Weeks stats */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: { xs: '16px', md: '32px' },
                                alignItems: 'center',
                            }}
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: '22px', md: '30px' },
                                        color: '#fff',
                                        fontFamily: "'Poppins', sans-serif",
                                        lineHeight: 1,
                                    }}
                                >
                                    {weeksPregnant}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        color: 'rgba(255,255,255,0.85)',
                                        fontFamily: "'Poppins', sans-serif",
                                    }}
                                >
                                    Weeks
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: '22px', md: '30px' },
                                        color: '#fff',
                                        fontFamily: "'Poppins', sans-serif",
                                        lineHeight: 1,
                                    }}
                                >
                                    {weeksToGo}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        color: 'rgba(255,255,255,0.85)',
                                        fontFamily: "'Poppins', sans-serif",
                                    }}
                                >
                                    To go
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Content area for active nav section */}
                    <Box sx={{ mt: 3 }}>
                        {/* Placeholder – future sections (Dashboard, Nutrition, etc.) go here */}
                        <Typography
                            sx={{
                                color: '#aaa',
                                fontSize: '14px',
                                fontFamily: "'Poppins', sans-serif",
                                textAlign: 'center',
                                mt: 6,
                            }}
                        >
                            {/* Dashboard content will appear here */}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MomHome;
