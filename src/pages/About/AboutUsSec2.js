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
        py: { xs: 4, sm: 6 }, // Reduced padding on smaller screens
        // px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      }}
    >
      <Container >
        {/* Operations and Commitment Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 3, md: 4 }, // Reduced gap on XS
            mb: { xs: 4, md: 6 },
          }}
        >
          {/* Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.2rem" },
                fontWeight: 900,
                color: colors.darkBlue,
                lineHeight: 1,
                mb: 2,
              }}
            >
              Who we are
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
                color: "#6b7280",
                mb: { xs: 2, md: 3 }, // Reduced margin on XS
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
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                color: "#6b7280",
                mb: { xs: 2, md: 3 },
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
              maxWidth: { xs: "100%", sm: "80%", md: "50%" }, // Adjusted for better scaling
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
                maxHeight: { xs: 300, sm: 350, md: 400 }, // Responsive image height
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ my: 8 }}>
          <Grid container spacing={4} justifyContent="center" display={"flex"}>
            {/* Vision Card */}
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  p: 4,
                  backgroundColor: "#fff",
                  position: "relative",
                  minHeight: 200,
                  justifyContent: "center",
                }}
              >
                {/* Decorative Dot */}
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
                  sx={{ color: colors.darkBlue }}
                >
                  VISION
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8}}>
                  To be the leading digital company known for delivering
                  intelligent systems and seamlessly integrated products that
                  empower organizations with real-time visibility, efficient
                  collaboration, and secure access — while contributing to the
                  development of tomorrow.
                </Typography>
              </Box>
            </Grid>

            {/* Mission Card */}
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  p: 4,
                  backgroundColor: "#fff",
                  position: "relative",
                  minHeight: 200,
                }}
              >
                {/* Decorative Dot */}
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
                  sx={{ color: colors.darkBlue }}
                >
                  MISSION
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
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
        <Grid sx={{ display: "flex", justifyContent:"space-between" }} gap={{md:6}}>
          <Box
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              mt: 5,
              py: 2,
              textAlign: "left",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.9rem", sm: "3.5rem", md: "4.8rem" },
                fontWeight: 900,
                color: colors.darkBlue,
                lineHeight: 1,
                mb: 2,
              }}
            >
              Let’s get <br /> in touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                color: "#333",
                fontWeight: 400,
                mb: 4,
              }}
            >
              Reach out to us for collaborations, demos, or <br />
              any questions you have about our solutions.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
                (+65) 60502580
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
                connect@cynkco.com
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Address
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
                60 Paya Lebar Road, #06-39, <br />
                Paya Lebar Square, Singapore 409051
              </Typography>
            </Box>
          </Box>
          <Box
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              flex: 1,
              py: 2,
            }}
          >
            <CardMedia
              component="img"
              image={signage}
              // alt="Cynkco Technologies Commitment – Smart Board in Use"
              // sx={{
              //   borderRadius: "8px",
              //   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              //   width: "100%",
              //   height: "auto",
              sx={{ maxHeight: { xs: 300, sm: 350, md: 600 } }} // Responsive image height
              //   objectFit: "cover",
              // }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
