import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Asset imports
import logoImg from '../../assets/SignIn/logo.webp';

const VerificationCode = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; // Only numbers

        const newCode = [...code];
        newCode[index] = value.slice(-1); // Only take last char
        setCode(newCode);

        // Auto focus next
        if (value && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
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
            {/* Header Section - Matches Login/ForgetPassword for Consistency */}
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

            {/* Verification Box */}
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
                        mb: 1,
                        textAlign: 'center'
                    }}
                >
                    Verification Code
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: '#4a4a4a',
                        textAlign: 'center',
                        fontSize: { xs: '13px', md: '14px' },
                        mb: 3,
                        lineHeight: 1.5,
                        fontWeight: 500
                    }}
                >
                    Please enter the 4 digit code sent to your email.
                </Typography>

                {/* 4-Digit Input Section */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: 1.5, md: 2 },
                        mb: 3,
                        width: '100%',
                        justifyContent: 'center'
                    }}
                >
                    {code.map((digit, index) => (
                        <TextField
                            key={index}
                            inputRef={inputRefs[index]}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            variant="outlined"
                            autoComplete="off"
                            sx={{
                                width: { xs: 50, md: 60 },
                                '& .MuiOutlinedInput-root': {
                                    height: { xs: 50, md: 60 },
                                    borderRadius: '12px',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    bgcolor: '#FFFFFF',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
                                    '& fieldset': {
                                        borderColor: '#D1D5DB',
                                        borderWidth: '1.5px'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#4CAF50',
                                        borderWidth: '2px'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#4CAF50',
                                        borderWidth: '2px'
                                    },
                                    '& input': { textAlign: 'center', p: 0 }
                                }
                            }}
                        />
                    ))}
                </Box>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate('/new-password')}
                    sx={{
                        height: { xs: 44, md: 48 },
                        borderRadius: '12px',
                        background: 'linear-gradient(180deg, #3DC664 0%, #219140 100%)',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 700,
                        mb: 3,
                        '&:hover': {
                            opacity: 0.9,
                            background: 'linear-gradient(180deg, #35b058 0%, #1e8038 100%)'
                        }
                    }}
                >
                    Verify
                </Button>

                <Typography
                    variant="body2"
                    sx={{
                        color: '#666',
                        fontSize: '13px',
                        fontWeight: 500
                    }}
                >
                    Didn't get the code?{' '}
                    <Link
                        component="button"
                        onClick={() => { }}
                        sx={{
                            color: '#1a1a1a',
                            fontWeight: 700,
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        Resend Code
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default VerificationCode;
