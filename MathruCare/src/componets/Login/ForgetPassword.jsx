import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Snackbar,
    Alert
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/SignIn/logo.webp';
import { api } from '../../api/api';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState('');
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleSendCode = async () => {
        if (!identifier) {
            setSnackbar({ open: true, message: 'Please enter your email address', severity: 'error' });
            return;
        }
        setLoading(true);
        try {
            await api.post('/auth/forgot-password', { identifier });
            sessionStorage.setItem('reset_identifier', identifier);
            setSnackbar({ open: true, message: 'Code sent to your email!', severity: 'success' });
            setTimeout(() => navigate('/verification-code'), 1500);
        } catch (err) {
            setSnackbar({ open: true, message: err.message || 'Failed to send code. Please try again.', severity: 'error' });
        } finally {
            setLoading(false);
        }
    };

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
                            fontFamily: "'Poppins', sans-serif"
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
                        textAlign: 'center',
                        fontFamily: "'Poppins', sans-serif"
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
                        textAlign: 'center',
                        fontFamily: "'Poppins', sans-serif"
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
                        fontWeight: 500,
                        fontFamily: "'Poppins', sans-serif"
                    }}
                >
                    We need your registration email address to send you password reset code!
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
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, color: '#333', fontSize: { xs: '13px', md: '14px' } }}>
                        Enter your email address
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        placeholder="Email address"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                bgcolor: '#FFFFFF',
                                fontFamily: "'Poppins', sans-serif",
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
                    disabled={loading}
                    onClick={handleSendCode}
                    sx={{
                        height: { xs: 44, md: 48 },
                        borderRadius: '12px',
                        background: 'linear-gradient(180deg, #3DC664 0%, #219140 100%)',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 700,
                        fontFamily: "'Poppins', sans-serif",
                        '&:hover': {
                            opacity: 0.9,
                            background: 'linear-gradient(180deg, #35b058 0%, #1e8038 100%)'
                        }
                    }}
                >
                    {loading ? 'Sending...' : 'Send Code'}
                </Button>
            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })} sx={{ width: '100%', fontFamily: "'Poppins', sans-serif" }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ForgetPassword;
