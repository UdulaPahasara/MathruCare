import React, { useState, useRef } from 'react';
import {
    Box,
    Typography,
    Button,
    Snackbar,
    Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/SignIn/logo.webp';
import { api } from '../../api/api';

const VerificationCode = () => {
    const navigate = useNavigate();
    const identifier = sessionStorage.getItem('reset_identifier') || '';

    const [digits, setDigits] = useState(['', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;
        const newDigits = [...digits];
        newDigits[index] = value;
        setDigits(newDigits);
        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !digits[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
        if (paste.length === 4) {
            setDigits(paste.split(''));
            inputRefs.current[3]?.focus();
        }
        e.preventDefault();
    };

    const handleVerify = async () => {
        const otp = digits.join('');
        if (otp.length < 4) {
            setSnackbar({ open: true, message: 'Please enter the 4-digit code', severity: 'error' });
            return;
        }
        setLoading(true);
        try {
            // Call backend to verify the code
            await api.post('/auth/verify-otp', { identifier, otp });

            // Store OTP for the next step (NewPassword screen) if verified
            sessionStorage.setItem('reset_otp', otp);
            setSnackbar({ open: true, message: 'Code verified! Set your new password.', severity: 'success' });
            setTimeout(() => navigate('/new-password'), 1000);
        } catch (err) {
            setSnackbar({ open: true, message: err.response?.data?.message || err.message || 'Verification failed. Please try again.', severity: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        try {
            await api.post('/auth/forgot-password', { identifier });
            setSnackbar({ open: true, message: 'Code resent!', severity: 'success' });
        } catch (err) {
            setSnackbar({ open: true, message: err.message || 'Failed to resend code.', severity: 'error' });
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
            {/* Header */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: { xs: 1.5, md: 2, lg: 3 }, mt: { xs: 1, md: 0 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 1.5, lg: 2 }, mb: 0.5 }}>
                    <Box component="img" src={logoImg} alt="MathruCare Logo" sx={{ width: { xs: 32, md: 48, lg: 60 }, height: 'auto' }} />
                    <Typography variant="h2" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: { xs: '24px', md: '36px', lg: '42px' }, fontFamily: "'Poppins', sans-serif" }}>
                        MathruCare
                    </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ color: '#4a4a4a', fontSize: { xs: '11px', md: '14px', lg: '16px' }, fontWeight: 400, textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
                    Supporting maternal health with trusted digital care
                </Typography>
            </Box>

            {/* Card */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: { xs: '80%', sm: '80%', md: 500 },
                    borderRadius: '20px',
                    border: '1.5px solid transparent',
                    background: 'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(180deg, #3DC664 0%, #219140 100%) border-box',
                    p: { xs: '24px 20px', md: '36px 44px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    mb: { xs: 2, md: 0 }
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: { xs: '22px', md: '30px' }, textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
                    Verification Code
                </Typography>

                <Typography variant="body2" sx={{ color: '#4a4a4a', textAlign: 'center', fontSize: { xs: '12px', md: '13px' }, fontFamily: "'Poppins', sans-serif" }}>
                    Please enter the 4 digit code sent to your email.
                </Typography>

                {/* OTP Boxes */}
                <Box sx={{ display: 'flex', gap: { xs: '8px', md: '12px' }, justifyContent: 'center', my: 1 }} onPaste={handlePaste}>
                    {digits.map((digit, index) => (
                        <Box
                            key={index}
                            component="input"
                            ref={el => inputRefs.current[index] = el}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={e => handleChange(index, e.target.value)}
                            onKeyDown={e => handleKeyDown(index, e)}
                            sx={{
                                width: { xs: '44px', md: '54px' },
                                height: { xs: '44px', md: '54px' },
                                border: '1.5px solid',
                                borderColor: digit ? '#3DC664' : '#D1D5DB',
                                borderRadius: '10px',
                                textAlign: 'center',
                                fontSize: { xs: '20px', md: '24px' },
                                fontWeight: 600,
                                outline: 'none',
                                fontFamily: "'Poppins', sans-serif",
                                color: '#1a1a1a',
                                bgcolor: '#fff',
                                cursor: 'text',
                                transition: 'border-color 0.2s',
                                '&:focus': { borderColor: '#219140', boxShadow: '0 0 0 2px rgba(61,198,100,0.15)' }
                            }}
                        />
                    ))}
                </Box>

                {/* Verify Button */}
                <Button
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    onClick={handleVerify}
                    sx={{
                        height: { xs: 44, md: 48 },
                        borderRadius: '12px',
                        background: 'linear-gradient(180deg, #3DC664 0%, #219140 100%)',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 700,
                        fontFamily: "'Poppins', sans-serif",
                        '&:hover': { opacity: 0.9, background: 'linear-gradient(180deg, #35b058 0%, #1e8038 100%)' }
                    }}
                >
                    {loading ? 'Verifying...' : 'Verify'}
                </Button>

                {/* Resend */}
                <Typography sx={{ textAlign: 'center', fontSize: '13px', color: '#555', fontFamily: "'Poppins', sans-serif" }}>
                    Didn't get the code?{' '}
                    <Box
                        component="span"
                        onClick={handleResend}
                        sx={{ fontWeight: 700, color: '#219140', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                    >
                        Resend Code
                    </Box>
                </Typography>
            </Box>

            <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })} sx={{ width: '100%', fontFamily: "'Poppins', sans-serif" }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default VerificationCode;
