import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    InputAdornment,
    Snackbar,
    Alert
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/SignIn/logo.webp';
import { api } from '../../api/api';

const NewPassword = () => {
    const navigate = useNavigate();
    const identifier = sessionStorage.getItem('reset_identifier') || '';
    const otp = sessionStorage.getItem('reset_otp') || '';
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleReset = async () => {
        if (!password || !confirmPassword) {
            setSnackbar({ open: true, message: 'Please fill in all fields', severity: 'error' });
            return;
        }
        if (password !== confirmPassword) {
            setSnackbar({ open: true, message: 'Passwords do not match', severity: 'error' });
            return;
        }
        if (password.length < 6) {
            setSnackbar({ open: true, message: 'Password must be at least 6 characters', severity: 'error' });
            return;
        }
        setLoading(true);
        try {
            await api.post('/auth/reset-password', { identifier, otp, newPassword: password });
            sessionStorage.removeItem('reset_identifier');
            sessionStorage.removeItem('reset_otp');
            setSnackbar({ open: true, message: 'Password reset successful! Redirecting to login...', severity: 'success' });
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setSnackbar({ open: true, message: err.message || 'Reset failed. Try again.', severity: 'error' });
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
            {/* Header Section */}
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

            {/* New Password Box */}
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
                        fontSize: { xs: '24px', md: '36px' },
                        mb: 3,
                        textAlign: 'center',
                        fontFamily: "'Poppins', sans-serif"
                    }}
                >
                    Create New Password
                </Typography>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5,
                        mb: 1
                    }}
                >
                    <Typography sx={{ fontWeight: 500, color: '#333', fontSize: { xs: '13px', md: '14px' }, fontFamily: "'Poppins', sans-serif" }}>
                        Enter Password
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end" size="small">
                                            {showPassword ? (
                                                <VisibilityOff sx={{ fontSize: 20, color: '#666' }} />
                                            ) : (
                                                <Visibility sx={{ fontSize: 20, color: '#666' }} />
                                            )}
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    ml: 0.5,
                                                    fontWeight: 600,
                                                    fontSize: '10px',
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: '#666'
                                                }}
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Typography>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }
                        }}
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
                    <Typography sx={{ color: '#888', fontSize: { xs: '11px', md: '12px' }, mt: 0.5, fontFamily: "'Poppins', sans-serif" }}>
                        Use 8 characters with a mix of letters, numbers & symbols
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5,
                        mb: { xs: 3, md: 4 }
                    }}
                >
                    <Typography sx={{ fontWeight: 500, color: '#333', fontSize: { xs: '13px', md: '14px' }, fontFamily: "'Poppins', sans-serif" }}>
                        Confirm Password
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        type={showConfirmPassword ? 'text' : 'password'}
                        variant="outlined"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowConfirmPassword} edge="end" size="small">
                                            {showConfirmPassword ? (
                                                <VisibilityOff sx={{ fontSize: 20, color: '#666' }} />
                                            ) : (
                                                <Visibility sx={{ fontSize: 20, color: '#666' }} />
                                            )}
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    ml: 0.5,
                                                    fontWeight: 600,
                                                    fontSize: '10px',
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: '#666'
                                                }}
                                            >
                                                {showConfirmPassword ? 'Hide' : 'Show'}
                                            </Typography>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }
                        }}
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
                    onClick={handleReset}
                    sx={{
                        height: { xs: 44, md: 48 },
                        borderRadius: '12px',
                        background: 'linear-gradient(180deg, #3DC664 0%, #219140 100%)',
                        fontFamily: "'Poppins', sans-serif",
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 700,
                        '&:hover': {
                            opacity: 0.9,
                            background: 'linear-gradient(180deg, #35b058 0%, #1e8038 100%)'
                        }
                    }}
                >
                    {loading ? 'Resetting...' : 'Reset Password'}
                </Button>
            </Box>

            <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })} sx={{ width: '100%', fontFamily: "'Poppins', sans-serif" }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default NewPassword;
