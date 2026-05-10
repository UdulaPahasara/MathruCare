import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    Checkbox,
    FormControlLabel,
    Snackbar,
    Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Share from '../share/share';

const Register = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [mohDivision, setMohDivision] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [lmpDate, setLmpDate] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [hasDiabetes, setHasDiabetes] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });

    const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

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
                                Register as a new mother
                            </Typography>
                        </Box>

                        {/* Form Details Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', ml: { sm: '-11px', lg: '-120px' } }}>
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
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Last Menstrual Period (LMP) date</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="date"
                                    value={lmpDate}
                                    onChange={(e) => setLmpDate(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF',
                                            fontFamily: "'Poppins', sans-serif"
                                        }
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2, maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Current Height (cm)</Typography>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '8px',
                                                bgcolor: '#FFFFFF',
                                                fontFamily: "'Poppins', sans-serif"
                                            }
                                        }}
                                    />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500, ml: '10px', fontFamily: "'Poppins', sans-serif" }}>Current Weight (kg)</Typography>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
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

                            <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={hasDiabetes}
                                            onChange={(e) => setHasDiabetes(e.target.checked)}
                                            sx={{
                                                color: '#BDBDBD',
                                                padding: '4px',
                                                ml: 1,
                                                '&.Mui-checked': {
                                                    color: '#3DC664',
                                                },
                                            }}
                                        />
                                    }
                                    label={<Typography sx={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>Do you have diabetes?</Typography>}
                                    sx={{ ml: -1, mt: -0.5 }}
                                />
                            </Box>
                        </Box>

                        {/* Pagination & Next Button Section */}
                        <Box sx={{ maxWidth: { lg: '70%' }, mx: 'auto', width: '100%' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    position: 'relative',
                                    mt: 0,
                                    ml: { xs: '110px', sm: "220px", md: "240px", lg: '170px' }
                                }}
                            >
                                {/* Green Progress Navigation - Positioned Left using absolute or matching space-between */}
                                <Box sx={{ position: 'absolute', left: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Box sx={{ width: '32px', height: '8px', bgcolor: '#3DC664', borderRadius: '4px', mt: { md: '-10px', lg: '-20px' } }} />
                                    <Box sx={{ width: '8px', height: '8px', bgcolor: '#E0E0E0', borderRadius: '50%', mt: { md: '-10px', lg: '-20px' } }} />
                                </Box>

                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        if (!fullName || !mohDivision || !phone || !email || !lmpDate || !height || !weight) {
                                            setSnackbar({
                                                open: true,
                                                message: 'Please fill in all required fields (Name, MOH Division, Phone, Email, LMP Date, Height, and Weight).',
                                                severity: 'error'
                                            });
                                            return;
                                        }

                                        // Validate phone number: must be exactly 10 digits
                                        const phoneDigits = phone.replace(/\D/g, '');
                                        if (phoneDigits.length !== 10) {
                                            setSnackbar({
                                                open: true,
                                                message: 'Phone number must be exactly 10 digits.',
                                                severity: 'error'
                                            });
                                            return;
                                        }

                                        const nameParts = fullName.trim().split(' ');
                                        const firstname = nameParts[0] || '';
                                        const lastname = nameParts.slice(1).join(' ') || '';

                                        localStorage.setItem('reg_step1', JSON.stringify({
                                            firstname,
                                            lastname,
                                            mohDivision,
                                            phone: phoneDigits,
                                            email,
                                            lmpDate,
                                            height: height ? parseFloat(height) : null,
                                            weight: weight ? parseFloat(weight) : null,
                                            hasDiabetes,
                                            role: 'MOTHER'
                                        }));
                                        navigate('/register-next');
                                    }}
                                    sx={{
                                        width: '120px',
                                        height: '46px',
                                        borderRadius: '10px',
                                        bgcolor: '#1A1A1A',
                                        color: '#FFFFFF',
                                        textTransform: 'none',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        px: '10px',
                                        mt: { md: '-20px', lg: '-30px' },
                                        mr: { lg: '12px' },
                                        fontFamily: "'Poppins', sans-serif",
                                        '&:hover': {
                                            bgcolor: '#333333'
                                        }
                                    }}
                                >
                                    Next
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%', fontFamily: "'Poppins', sans-serif" }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Register;
