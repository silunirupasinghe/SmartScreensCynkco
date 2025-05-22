import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'; // Icon for Email
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Icon for Office
import PhoneIcon from '@mui/icons-material/Phone'; // Icon for Phone
import colors from '../../theme/colors'; // Import colors from theme
const ContactUs = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              lineHeight: 1.0,
              background: `linear-gradient(45deg, ${colors.gradientStart} 0%, ${colors.darkBlue} 100%)`, // Use colors from colors.js
                WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get in touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: 'grey.600',
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            Our friendly team is always here to assist.
          </Typography>
        </Box>

        {/* Contact Info Grid */}
        <Grid container spacing={4} justifyContent="center">
          {/* Email Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: '50%',
                  bgcolor: colors.blue, // Light green background to match the hero section icons
                  mb: 2,
                }}
              >
                <EmailIcon
                  sx={{
                     fontSize: 24,
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'medium',
                  color: 'grey.800',
                  mb: 1,
                  fontSize: '1.25rem',
                }}
              >
                Email
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'grey.600',
                  mb: 1,
                  fontSize: '1rem',
                }}
              >
                Our friendly team is here to help.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.darkBlue,
                  fontWeight: 'medium',
                  fontSize: '1rem',
                }}
              >
                hello@merakiui.com
              </Typography>
            </Box>
          </Grid>

          {/* Office Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: '50%',
                  bgcolor: colors.blue, // Light green background to match the hero section icons
                  mb: 2,
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: 'green.400', // Slightly lighter green to match the hero section icons
                    fontSize: 24,
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'medium',
                  color: 'grey.800',
                  mb: 1,
                  fontSize: '1.25rem',
                }}
              >
                Office
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'grey.600',
                  mb: 1,
                  fontSize: '1rem',
                }}
              >
                Come say hello at our office HQ.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.darkBlue,
                  fontWeight: 'medium',
                  fontSize: '1rem',
                }}
              >
                100 Smith Street Collingwood VIC 3066 AU
              </Typography>
            </Box>
          </Grid>

          {/* Phone Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: '50%',
                  bgcolor: colors.blue, // Light green background to match the hero section icons
                  mb: 2,
                }}
              >
                <PhoneIcon
                  sx={{
                    color: 'green.400', // Slightly lighter green to match the hero section icons
                    fontSize: 24,
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'medium',
                  color: 'grey.800',
                  mb: 1,
                  fontSize: '1.25rem',
                }}
              >
                Phone
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'grey.600',
                  mb: 1,
                  fontSize: '1rem',
                }}
              >
                Mon-Fri from 8am to 5pm.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.darkBlue,
                  fontWeight: 'medium',
                  fontSize: '1rem',
                }}
              >
                +1 (555) 000-0000
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;