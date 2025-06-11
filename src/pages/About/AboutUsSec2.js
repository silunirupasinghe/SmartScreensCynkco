import React from "react";
import { Box, Typography, Container, Grid, CardMedia } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import commitmentImage from "../../Assets/aboutUs/commitment.jpg";
import signage from "../../Assets/aboutUs/signage.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import colors from "../../theme/colors";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 2, sm: 4, md: 5 }, // Reduced padding on smaller screens
      }}
    >
      <Container maxWidth="lg">
        {/* Operations and Commitment Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 2, sm: 3, md: 4 },
            mb: { xs: 3, sm: 4, md: 6 },
          }}
        >
          {/* Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "4.2rem" },
                fontWeight: 900,
                color: colors.darkBlue,
                lineHeight: 1.1,
                mb: { xs: 1, sm: 2 },
              }}
            >
              Who we are
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                color: "#6b7280",
                mb: { xs: 1, sm: 2, md: 3 },
              }}
            >
              CYNKCO TECHNOLOGY is a future-focused technology provider,
              delivering integrated smart solutions across surveillance,
              education, communication, access control, computing, and data
              storage. With deep domain expertise and continuous innovation, we
              are redefining how people interact with technology in schools,
              offices, industrial sites, and smart environments.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                color: "#6b7280",
                mb: { xs: 1, sm: 2, md: 3 },
              }}
            >
              Founded with the vision of making intelligent systems accessible
              and effective, CYNKCO combines powerful hardware with
              user-friendly software to enhance security, collaboration, and
              operational efficiency. Our commitment is to build a smarter,
              safer, and more connected world.
            </Typography>
          </Box>
          {/* Image */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", sm: "80%", md: "50%" },
              mt: { xs: 2, sm: 0 }, // Add margin top on mobile
            }}
          >
            <CardMedia
              component="img"
              image={commitmentImage}
              alt="Cynkco Technologies Commitment – Smart Board in Use"
              sx={{
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "auto",
                maxHeight: { xs: 250, sm: 350, md: 400 },
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ my: { xs: 4, sm: 6, md: 4 } }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Vision Card */}
            <Grid size={{ xs: 12, sm: 6, md: 6 }} >
              <Box
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  p: { xs: 2, sm: 3, md: 4 },
                  backgroundColor: "#fff",
                  position: "relative",
                  minHeight: { xs: 150, sm: 200 },
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: colors.darkBlue,
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: colors.darkBlue, fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  VISION
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ lineHeight: 1.6, fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  To be the leading digital company known for delivering
                  intelligent systems and seamlessly integrated products that
                  empower organizations with real-time visibility, efficient
                  collaboration, and secure access — while contributing to the
                  development of tomorrow.
                </Typography>
              </Box>
            </Grid>

            {/* Mission Card */}
            <Grid size={{ xs: 12, sm: 6, md: 6 }} >
              <Box
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  p: { xs: 2, sm: 3, md: 4 },
                  backgroundColor: "#fff",
                  position: "relative",
                  minHeight: { xs: 150, sm: 200 },
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: colors.darkBlue,
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: colors.darkBlue, fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  MISSION
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ lineHeight: 1.6, fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  Our mission is to deliver exceptional digital solutions,
                  combining deep R&D with practical integration strategies. We
                  aim to provide clients with accessible and trustworthy
                  intelligent devices, helping enterprises boost their growth
                  with smarter workflows, faster systems, and engaging
                  experiences.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Section */}
       
      </Container>
    </Box>
  );
};

export default AboutUs;