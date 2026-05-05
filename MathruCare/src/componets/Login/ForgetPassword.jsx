import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

// Asset imports
import logoImg from '../../assets/SignIn/logo.webp';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                bgcolor: '#EDFFF1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' },
                pt: { xs: 2, md: 4, lg: 8 },
                pb: { xs: 2, md: 4, lg: 4 },
                fontFamily: "'Poppins', sans-serif",
                position: 'relative',
                overflowY: 'auto'
            }}
        >
            {/* Header Section - Matches Login Header for Consistency */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: { xs: 1.5, md: 2, lg: 3 },
                    mt: { xs: 1, md: 0 }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1, md: 1.5, lg: 2 },
                        mb: 0.5
                    }}
                >
                    <Box
                        component="img"
                        src={logoImg}
                        alt="MathruCare Logo"
                        sx={{ width: { xs: 32, md: 48, lg: 60 }, height: 'auto' }}
                    />
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            color: '#1a1a1a',
                            fontSize: { xs: '24px', md: '36px', lg: '42px' },
                            fontFamily: "'Outfit', sans-serif"
                        }}
                    >
                        MathruCare
                    </Typography>
                </Box>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#4a4a4a',
                        fontSize: { xs: '11px', md: '14px', lg: '16px' },
                        fontWeight: 400,
                        textAlign: 'center'
                    }}
                >
                    Supporting maternal health with trusted digital care
                </Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    maxWidth: { xs: '80%', sm: '80%', md: 600 },
                    borderRadius: '20px',
                    border: '1.5px solid transparent',
                    background: 'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(180deg, #3DC664 0%, #219140 100%) border-box',
                    p: { xs: '16px 20px', md: '24px 40px', lg: '30px 50px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    mb: { xs: 2, md: 0 }
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        color: '#1a1a1a',
                        fontSize: { xs: '22px', md: '30px', lg: '36px' },
                        mb: 1,
                        textAlign: 'center'
                    }}
                >
                    Forgot Password?
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: '#4a4a4a',
                        textAlign: 'center',
                        fontSize: { xs: '12px', md: '13px', lg: '14px' },
                        mb: { xs: 2, md: 3 },
                        lineHeight: 1.5,
                        fontWeight: 500
                    }}
                >
                    We need your registration phone number to send you password reset code!
                </Typography>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5,
                        mb: { xs: 2, md: 3 }
                    }}
                >
                    <Typography sx={{ fontWeight: 500, color: '#333', fontSize: { xs: '13px', md: '14px' } }}>
                        Enter your email address
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                bgcolor: '#FFFFFF',
                                '& fieldset': { borderColor: '#E5E7EB' },
                                '&:hover fieldset': { borderColor: '#4CAF50' },
                                '&.Mui-focused fieldset': { borderColor: '#4CAF50' }
                            }
                        }}
                    />
                </Box>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate('/verification-code')}
                    sx={{
                        height: { xs: 44, md: 48 },
                        borderRadius: '12px',
                        background: 'linear-gradient(180deg, #3DC664 0%, #219140 100%)',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 700,
                        '&:hover': {
                            opacity: 0.9,
                            background: 'linear-gradient(180deg, #35b058 0%, #1e8038 100%)'
                        }
                    }}
                >
                    Send Code
                </Button>
            </Box>
        </Box>
    );
};

export default ForgetPassword;
