import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Share from '../share/share';

const AdminSignup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
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
                        ml: { sm: '-1px', md: '40px', lg: '10px' },
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
                            maxWidth: { xs: 463, lg: 600 },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}
                    >
                        {/* Header Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', ml: { lg: '-100px' } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '28px', md: '36px' },
                                    color: '#1A1A1A' // From design
                                }}
                            >
                                Create an Account
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontSize: { xs: '16px', md: '18px' },
                                    color: '#666666',
                                    fontWeight: 400
                                }}
                            >
                                Register as a MOH Admin
                            </Typography>
                        </Box>

                        {/* Form Details Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', ml: { sm: '-11px', lg: '-120px' } }}>
                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px' }}>Email Address</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF'
                                        }
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px' }}>Enter Password</Typography>
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
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px' }}>Confirm Password</Typography>
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

                            {/* Register Button - inside form box to match field width */}
                            <Button
                                variant="contained"
                                onClick={() => { }}
                                fullWidth
                                sx={{
                                    height: '46px',
                                    borderRadius: '10px',
                                    bgcolor: '#3DC664',
                                    color: '#FFFFFF',
                                    textTransform: 'none',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    mt: 1,
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
        </Box>
    );
};

export default AdminSignup;
