import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    InputAdornment,
    ToggleButton,
    ToggleButtonGroup,
    Link,
    Paper
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

// Asset imports
import logoImg from '../../assets/SignIn/logo.webp';
import motherIcon from '../../assets/SignIn/user.webp';
import midwifeIcon from '../../assets/SignIn/midwife.webp';
import adminIcon from '../../assets/SignIn/admin.webp';

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('mother');
    const [showPassword, setShowPassword] = useState(false);
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleRoleChange = (event, newRole) => {
        if (newRole !== null) {
            setRole(newRole);
        }
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    // Icon style as requested: 24x24, 0deg rotation, opacity 1
    const iconStyle = {
        width: 24,
        height: 24,
        transform: 'rotate(0deg)',
        opacity: 1,
        objectFit: 'contain'
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
                justifyContent: 'center',
                p: { xs: 0, md: 2, lg: 3 },
                fontFamily: "'Poppins', sans-serif",
                position: 'relative'
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

            {/* Sign In Form Box */}
            <Paper
                elevation={0}
                sx={{
                    width: '100%',
                    maxWidth: { xs: '80%', sm: '80%', md: 600 },
                    borderRadius: '24px',
                    border: '1.5px solid rgba(76, 175, 80, 0.4)',
                    p: { xs: '16px 20px', md: '24px 40px', lg: '30px 50px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: '#FFFFFF',
                    mb: { xs: 2, md: 0 }
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 500,
                        color: '#666',
                        mb: { xs: 1.5, md: 2, lg: 2.5 },
                        fontSize: { xs: '16px', md: '17px', lg: '18px' },
                        textAlign: 'center',
                        fontFamily: "'Poppins', sans-serif"
                    }}
                >
                    Sign in to access your account
                </Typography>

                {/* Role Toggle */}
                <ToggleButtonGroup
                    value={role}
                    exclusive
                    onChange={handleRoleChange}
                    sx={{
                        width: '100%',
                        mb: { xs: 2, md: 2.5, lg: 3 },
                        display: 'flex',
                        border: '1px solid #E0E0E0',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        '& .MuiToggleButton-root': {
                            flex: 1,
                            py: { xs: 0.5, md: 0.75, lg: 1 },
                            px: { xs: 0.5, md: 1 },
                            border: 'none',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: { xs: '12px', md: '13px', lg: '14px' },
                            fontFamily: "'Poppins', sans-serif",
                            color: '#666',
                            display: 'flex',
                            gap: { xs: 0.5, md: 1 },
                            '&.Mui-selected': {
                                bgcolor: '#4CAF50',
                                color: '#FFFFFF',
                                '&:hover': { bgcolor: '#45a049' },
                                '& img': { filter: 'brightness(0) invert(1)' }
                            },
                            '&:not(:last-child)': { borderRight: '1px solid #E0E0E0' },
                            '& img': {
                                width: { xs: 18, md: 22, lg: 24 },
                                height: { xs: 18, md: 22, lg: 24 }
                            }
                        }
                    }}
                >
                    <ToggleButton value="mother">
                        <Box component="img" src={motherIcon} alt="Mother" sx={iconStyle} />
                        Mother
                    </ToggleButton>
                    <ToggleButton value="midwife">
                        <Box component="img" src={midwifeIcon} alt="Midwife" sx={iconStyle} />
                        Midwife
                    </ToggleButton>
                    <ToggleButton value="admin">
                        <Box component="img" src={adminIcon} alt="Admin" sx={iconStyle} />
                        Admin
                    </ToggleButton>
                </ToggleButtonGroup>

                {/* Form Section */}
                <Box
                    component="form"
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 1.5, md: 2 }
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ fontWeight: 500, color: '#333', fontSize: { xs: '13px', md: '13.5px', lg: '14px' }, fontFamily: "'Poppins', sans-serif" }}>
                            {role === 'mother' ? 'Enter Mother Registration Number' :
                                role === 'midwife' ? 'Enter Midwife Registration Number' : 'Enter Admin Email'}
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            placeholder={role === 'mother' ? "Registration Number" : "ID / Username"}
                            value={registrationNumber}
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    bgcolor: '#F9FAFB',
                                    fontFamily: "'Poppins', sans-serif",
                                    '& fieldset': { borderColor: '#E5E7EB' }
                                }
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ fontWeight: 500, color: '#333', fontSize: { xs: '13px', md: '13.5px', lg: '14px' }, fontFamily: "'Poppins', sans-serif" }}>
                            Password
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            placeholder="Password"
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
                                    bgcolor: '#F9FAFB',
                                    fontFamily: "'Poppins', sans-serif",
                                    '& fieldset': { borderColor: '#E5E7EB' }
                                }
                            }}
                        />
                    </Box>

                    <Link
                        component="button"
                        type="button"
                        onClick={() => navigate('/forget-password')}
                        sx={{
                            color: '#333',
                            fontWeight: 700,
                            fontSize: '12px',
                            textDecoration: 'underline',
                            width: 'fit-content',
                            fontFamily: "'Poppins', sans-serif"
                        }}
                    >
                        Forget your password?
                    </Link>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            height: { xs: 42, md: 44, lg: 48 },
                            borderRadius: '12px',
                            bgcolor: '#4CAF50',
                            textTransform: 'none',
                            fontSize: '15px',
                            fontWeight: 700,
                            mt: 0.5,
                            fontFamily: "'Poppins', sans-serif",
                            '&:hover': { bgcolor: '#43A047' }
                        }}
                    >
                        Sign in
                    </Button>

                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            color: '#666',
                            mt: { xs: 0.5, md: 1 },
                            fontSize: '12px',
                            fontFamily: "'Poppins', sans-serif"
                        }}
                    >
                        {role !== 'admin' && (
                            <>
                                Don't have an acount?{' '}
                                <Box
                                    component="span"
                                    onClick={() => {
                                        if (role === 'mother') navigate('/register');
                                        if (role === 'midwife') navigate('/midwife-register');
                                    }}
                                    sx={{
                                        color: '#333',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        fontFamily: "'Poppins', sans-serif",
                                        '&:hover': { color: '#4CAF50' }
                                    }}
                                >
                                    Register here
                                </Box>
                            </>
                        )}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;


