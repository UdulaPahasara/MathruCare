import React from 'react';
import { Box, Typography } from '@mui/material';

// Asset imports
import logoImg from '../../../assets/SignIn/logo.webp';
import illustrationImg from '../../../assets/share/Nurce&Preg.webp';

const Share = () => {
    return (
        <Box
            sx={{
                height: '100%',
                minHeight: '100vh',
                width: '100%',
                bgcolor: '#3DC664',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: "'Poppins', sans-serif",
                color: '#FFFFFF',
                position: 'relative',
                overflow: 'hidden',
                ml: { xs: 0, sm: '-20px', md: 0, lg: -3.8 },
                pt: { xs: 4, md: 6, lg: 8 }
            }}
        >
            {/* Top Logo and Titles Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 4,
                    zIndex: 2,
                    px: 2
                }}
            >
                <Box
                    sx={{
                        width: 76,
                        height: 76,
                        borderRadius: '100px',
                        border: '0.5px solid rgba(255, 255, 255, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        mb: 1.5,
                        bgcolor: 'transparent'
                    }}
                >
                    <Box
                        component="img"
                        src={logoImg}
                        alt="MathruCare Logo"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            scale: '1.2' // Slight scale to hide edges if it isn't perfectly transparent
                        }}
                    />
                </Box>

                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 500,
                        fontSize: { xs: '20px', md: '28px' },
                        mb: 1,
                        fontFamily: "'Poppins', sans-serif"
                    }}
                >
                    MathruCare
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        fontSize: { xs: '16px', md: '20px' },
                        fontWeight: 400,
                        textAlign: 'center',
                        maxWidth: '100%',
                        lineHeight: 1.4,
                        fontFamily: "'Poppins', sans-serif"
                    }}
                >
                    Supporting maternal health with<br />trusted digital care
                </Typography>
            </Box>

            {/* Bottom Illustration Section */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: '100%',
                    px: { xs: 2, md: 4 },
                    pb: { xs: 4, md: 6 },
                    zIndex: 1
                }}
            >
                <Box
                    component="img"
                    src={illustrationImg}
                    alt="Nurse and Pregnant Woman"
                    sx={{
                        width: '100%',
                        maxWidth: 424,
                        height: 'auto',
                        maxHeight: 380,
                        mb: 4,
                        objectFit: 'contain'
                    }}
                />
            </Box>
        </Box>
    );
};

export default Share;
