import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    IconButton,
    InputAdornment
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Share from '../share/share';
import { api } from '../../../api/api';
import { Alert, Snackbar } from '@mui/material';

const MidwifeRegister = () => {
    const navigate = useNavigate();
    const [regNumber, setRegNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [mohDivision, setMohDivision] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleRegister = async () => {
        if (!fullName || !mohDivision || !phone || !email || !password || !regNumber) {
            setSnackbar({ open: true, message: 'Please fill in all required fields.', severity: 'error' });
            return;
        }
        if (password !== confirmPassword) {
            setSnackbar({ open: true, message: 'Passwords do not match', severity: 'error' });
            return;
        }

        // Password complexity validation: 8 chars, letters, numbers, symbols
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setSnackbar({
                open: true,
                message: 'Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.',
                severity: 'error'
            });
            return;
        }

        // Validate phone number: must be exactly 10 digits
        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length !== 10) {
            setSnackbar({ open: true, message: 'Phone number must be exactly 10 digits.', severity: 'error' });
            return;
        }

        const nameParts = fullName.trim().split(' ');
        const firstname = nameParts[0] || '';
        const lastname = nameParts.slice(1).join(' ') || '';

        setLoading(true);
        try {
            await api.post('/auth/register', {
                firstname,
                lastname,
                email,
                phone,
                password,
                role: 'MIDWIFE',
                regNumber,
                mohDivision
            });
            setSnackbar({ open: true, message: 'Registration successful! Redirecting to login...', severity: 'success' });
            setTimeout(() => navigate('/login', { state: { role: 'midwife' } }), 2000);
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
                        px: { xs: 2, sm: 0 }
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
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', ml: { lg: '-100px' }, textAlign: 'center' }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '28px', md: '36px' },
                                    color: '#1A1A1A',
                                    fontFamily: "'Poppins', sans-serif"
                                }}
                            >
                                Create an Account
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontSize: { xs: '16px', md: '18px' },
                                    color: '#666666',
                                    fontWeight: 400,
                                    fontFamily: "'Poppins', sans-serif"
                                }}
                            >
                                Register as a midwife
                            </Typography>
                        </Box>

                        {/* Form Details Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', ml: { sm: '-11px', lg: '-120px' } }}>
                            <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Registration Number</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={regNumber}
                                    onChange={(e) => setRegNumber(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF',
                                            fontFamily: "'Poppins', sans-serif"
                                        }
                                    }}
                                />
                            </Box>

                            <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Full Name</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF',
                                            fontFamily: "'Poppins', sans-serif"
                                        }
                                    }}
                                />
                            </Box>

                            <Box sx={{ maxWidth: '462px', mx: 'auto', width: '100%' }}>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>MOH Division</Typography>
                                <FormControl fullWidth size="small">
                                    <Select
                                        value={mohDivision}
                                        onChange={(e) => setMohDivision(e.target.value)}
                                        displayEmpty
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    maxHeight: 410,
                                                    width: 462,
                                                    '& .MuiMenuItem-root': {
                                                        fontFamily: "'Poppins', sans-serif",
                                                        fontSize: '14px',
                                                        py: 1
                                                    }
                                                }
                                            }
                                        }}
                                        sx={{
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF',
                                            fontFamily: "'Poppins', sans-serif",
                                            '& .MuiSelect-select': {
                                                py: '10px'
                                            }
                                        }}
                                    >
                                        <MenuItem value="" disabled>
                                            <span style={{ color: '#9CA3AF', fontFamily: "'Poppins', sans-serif" }}>Select MOH Division</span>
                                        </MenuItem>
                                        <MenuItem value="homagama">Homagama</MenuItem>
                                        <MenuItem value="pitipana">Pitipana</MenuItem>
                                        <MenuItem value="habarakada">Habarakada</MenuItem>
                                        <MenuItem value="meegoda">Meegoda</MenuItem>
                                        <MenuItem value="atigala">Atigala</MenuItem>
                                        <MenuItem value="jalthara">Jalthara</MenuItem>
                                        <MenuItem value="wataraka">Wataraka</MenuItem>
                                        <MenuItem value="owitigama">Owitigama</MenuItem>
                                        <MenuItem value="godagama">Godagama</MenuItem>
                                        <MenuItem value="henawaththa">Henawaththa</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Phone Number</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF',
                                            fontFamily: "'Poppins', sans-serif"
                                        }
                                    }}
                                />
                            </Box>

                            <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Email</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF',
                                            fontFamily: "'Poppins', sans-serif"
                                        }
                                    }}
                                />
                            </Box>

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

                            <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <Button
                                    variant="contained"
                                    onClick={handleRegister}
                                    disabled={loading}
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

export default MidwifeRegister;
