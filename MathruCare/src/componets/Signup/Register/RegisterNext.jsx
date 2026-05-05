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
                        ml: { sm: '20px', md: '40px', lg: '10px' },
                        mt: { xs: 4, sm: 0 },
                        pl: { lg: '192px' },
                        pr: { sm: '20px', md: '40px', lg: '100px' },
                        py: { xs: 4, sm: 6, lg: 0 },
                        px: { xs: 2, sm: 0 } // Mobile padding fallback
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: { xs: 462, lg: 600 },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px'
                        }}
                    >
                        {/* Form Details Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Enter Password</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF'
                                        }
                                    }}
                                />
                                <Typography sx={{ mt: 0.5, fontSize: '12px', color: '#666666' }}>
                                    Use 8 characters with a mix of letters, numbers & symbols
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Confirm Password</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF'
                                        }
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Navigation Row */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                position: 'relative',
                                mt: 1,
                                ml: { xs: '70px', sm: "220px", md: "240px", lg: "100px" }
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
                                    px: '10px',
                                    '&:hover': {
                                        borderColor: '#333333',
                                        bgcolor: 'rgba(0,0,0,0.02)'
                                    }
                                }}
                            >
                                Back
                            </Button>
                        </Box>

                        {/* Register Button */}
                        <Button
                            variant="contained"
                            onClick={() => { }} // Hook up submission handler later
                            fullWidth
                            sx={{
                                height: '46px',
                                borderRadius: '10px',
                                bgcolor: '#3DC664',
                                color: '#FFFFFF',
                                textTransform: 'none',
                                fontSize: '16px',
                                fontWeight: 500,
                                mt: -1,
                                '&:hover': {
                                    bgcolor: '#35b058'
                                }
                            }}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterNext;
