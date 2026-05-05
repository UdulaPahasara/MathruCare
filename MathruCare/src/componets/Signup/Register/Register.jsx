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
    FormControlLabel
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
                        ml: { sm: '1px', md: '40px', lg: '150px' },
                        mt: { xs: 4, sm: 0, lg: '-190px' },
                        pl: { lg: '192px' },
                        pr: { sm: '20px', md: '40px', lg: '272px' },
                        py: { xs: 4, sm: 6, lg: 0 },
                        px: { xs: 2, sm: 0 } // Mobile padding fallback
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 463,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px'
                        }}
                    >
                        {/* Header Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '28px', md: '36px' },
                                    color: '#1A1A1A'
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
                                Register as a new mother
                            </Typography>
                        </Box>

                        {/* Form Details Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Full Name</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            bgcolor: '#FFFFFF'
                                        }
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>MOH Division</Typography>
                                <FormControl fullWidth size="small">
                                    <Select
                                        value={mohDivision}
                                        onChange={(e) => setMohDivision(e.target.value)}
                                        displayEmpty
                                        sx={{ borderRadius: '8px', bgcolor: '#FFFFFF' }}
                                    >
                                        <MenuItem value="" disabled>
                                            <span style={{ color: '#9CA3AF' }}>Select MOH Division</span>
                                        </MenuItem>
                                        <MenuItem value="division1">Colombo</MenuItem>
                                        <MenuItem value="division2">Kandy</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Phone Number</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', bgcolor: '#FFFFFF' } }}
                                />
                            </Box>

                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Email</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="email"
                                    placeholder="Optional"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', bgcolor: '#FFFFFF' } }}
                                />
                            </Box>

                            <Box>
                                <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Last Menstrual Period (LMP) date</Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="date"
                                    value={lmpDate}
                                    onChange={(e) => setLmpDate(e.target.value)}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', bgcolor: '#FFFFFF' } }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Current Height (cm)</Typography>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', bgcolor: '#FFFFFF' } }}
                                    />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{ mb: 0.5, fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Current Weight (kg)</Typography>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', bgcolor: '#FFFFFF' } }}
                                    />
                                </Box>
                            </Box>

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
                                label={<Typography sx={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>Do you have diabetes?</Typography>}
                                sx={{ ml: -1, mt: -0.5 }}
                            />
                        </Box>

                        {/* Pagination & Next Button Section */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                position: 'relative',
                                mt: 1
                            }}
                        >
                            {/* Green Progress Navigation - Positioned Left using absolute or matching space-between */}
                            <Box sx={{ position: 'absolute', left: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Box sx={{ width: '32px', height: '8px', bgcolor: '#3DC664', borderRadius: '4px' }} />
                                <Box sx={{ width: '8px', height: '8px', bgcolor: '#E0E0E0', borderRadius: '50%' }} />
                            </Box>

                            <Button
                                variant="contained"
                                onClick={() => navigate('/register-next')}
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
    );
};

export default Register;
