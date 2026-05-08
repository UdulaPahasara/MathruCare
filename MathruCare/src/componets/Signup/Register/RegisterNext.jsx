import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Share from '../share/share';

const RegisterNext = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: '#FFFFFF',
                fontFamily: "'Poppins', sans-serif"
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1440px',
                    margin: '0 auto',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'stretch', lg: 'center' },
                    justifyContent: 'flex-start'
                }}
            >
                {/* Left Side: Share Component */}
                <Box sx={{ display: { xs: 'none', sm: 'block' }, width: { sm: '300px', md: '350px', lg: '515px' }, flexShrink: 0 }}>
                    <Share />
                </Box>

                {/* Right Side: Registration Form */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', lg: 'flex-start' },
                        ml: { sm: '1px', md: '40px', lg: '10px' },
                        mt: { xs: 4, sm: 0 },
                        pl: { lg: '192px' },
                        pr: { sm: '20px', md: '40px', lg: '100px' },
                        py: { xs: 4, sm: 3, lg: 0 },
                        px: { xs: 2, sm: 0 } // Mobile padding fallback
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: { xs: 462, lg: 600 },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}
                    >
                        {/* Form Details Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', ml: { sm: '-11px', lg: '-120px' } }}>
                            <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Enter Password</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF',
                                            fontFamily: "'Poppins', sans-serif"
                                        }
                                    }}
                                />
                                <Typography sx={{ mt: 0.5, fontSize: '12px', color: '#666666', fontFamily: "'Poppins', sans-serif" }}>
                                    Use 8 characters with a mix of letters, numbers & symbols
                                </Typography>
                            </Box>

                            <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Confirm Password</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF',
                                            fontFamily: "'Poppins', sans-serif"
                                        }
                                    }}
                                />
                            </Box>


                        </Box>

                        {/* Navigation Row */}
                        <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    position: 'relative',
                                    mt: 1,
                                    ml: { xs: '100px', sm: "220px", md: "240px", lg: '170px' }
                                }}
                            >
                                {/* Green Progress Navigation - Positioned Left */}
                                <Box sx={{ position: 'absolute', left: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Box sx={{ width: '32px', height: '8px', bgcolor: '#3DC664', borderRadius: '4px' }} />
                                    <Box sx={{ width: '8px', height: '8px', bgcolor: '#A5E0B5', borderRadius: '50%' }} />
                                </Box>

                                <Button
                                    variant="outlined"
                                    onClick={() => navigate('/register')}
                                    sx={{
                                        width: '120px',
                                        height: '46px',
                                        borderRadius: '10px',
                                        borderColor: '#1A1A1A',
                                        color: '#1A1A1A',
                                        textTransform: 'none',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        left: { lg: '-12px' },
                                        px: '10px',
                                        '&:hover': {
                                            borderColor: '#333333',
                                            bgcolor: 'rgba(0,0,0,0.02)'
                                        },
                                        fontFamily: "'Poppins', sans-serif"
                                    }}
                                >
                                    Back
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{ maxWidth: { lg: '85%' }, mx: 'auto', width: '100%', mt: 2, }}>
                            <Button
                                variant="contained"
                                onClick={() => { }} // Hook up submission handler later
                                fullWidth
                                sx={{
                                    height: '56px',
                                    borderRadius: '10px',
                                    bgcolor: '#3DC664',
                                    color: '#FFFFFF',
                                    textTransform: 'none',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    left: { lg: '-54px' },
                                    '&:hover': {
                                        bgcolor: '#35b058'
                                    },
                                    fontFamily: "'Poppins', sans-serif"
                                }}
                            >
                                Register
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterNext;
