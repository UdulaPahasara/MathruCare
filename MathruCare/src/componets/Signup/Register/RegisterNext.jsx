import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    InputAdornment
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Share from '../share/share';
import { api } from '../../../api/api';
import { Alert, Snackbar } from '@mui/material';

const RegisterNext = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setSnackbar({ open: true, message: 'Passwords do not match', severity: 'error' });
            return;
        }

        const step1Data = JSON.parse(localStorage.getItem('reg_step1') || '{}');
        if (!step1Data.phone) {
            setSnackbar({ open: true, message: 'Registration data missing. Please go back.', severity: 'error' });
            return;
        }

        setLoading(true);
        try {
            await api.post('/auth/register', {
                ...step1Data,
                password
            });
            setSnackbar({ open: true, message: 'Registration successful! Redirecting to login...', severity: 'success' });
            localStorage.removeItem('reg_step1');
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setSnackbar({ open: true, message: error.message || 'Registration failed', severity: 'error' });
        } finally {
            setLoading(false);
        }
    };

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
                                    type={showPassword ? 'text' : 'password'}
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
                                    type={showConfirmPassword ? 'text' : 'password'}
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
                                onClick={handleRegister}
                                disabled={loading}
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
                                {loading ? 'Registering...' : 'Register'}
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default RegisterNext;
