import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import commitmentImage from "../../Assets/aboutUs/commitment.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutUs = () => {
  const navigate = useNavigate();

  // Timeline milestones for Cynkco Technologies
  const milestones = [
    {
      year: "[2024-2025]",
      event:
        "Cynkco Technologies was founded with a vision to revolutionize interactive technology. Starting as a small team in [Location – please specify], we set out to design SmartScreen solutions for education, business, and healthcare sectors.",
    },
    {
      year: "[Year – please specify, e.g., 2016]",
      event:
        "Launched our first product, the CT-SC65A Smart Board, marking our entry into the interactive display market. This 65-inch 4K UHD Smart Board gained traction in schools and corporate offices for its seamless collaboration features.",
    },
  ];

 

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fa",
        py: { xs: 4, sm: 6 }, // Reduced padding on smaller screens
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      }}
    >
      <Container maxWidth="lg">
        {/* Introduction Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
              color: "#6b7280",
              maxWidth: "800px",
              mx: "auto",
              mb: { xs: 2, md: 3 }, // Reduced margin on smaller screens
            }}
          >
            <span style={{ color: "#28b463", fontWeight: 600 }}>
              Cynkco Technologies
            </span>{" "}
            is a leading provider of SmartScreen solutions, dedicated to
            enhancing collaboration and productivity across education, business,
            and healthcare sectors. With a focus on innovation and quality, we
            deliver advanced interactive displays that empower users worldwide.
          </Typography>
        </Box>

        {/* Timeline Section */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#1f2937",
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" }, // Responsive heading size
              textAlign: "center",
            }}
          >
            Our Journey
          </Typography>
          {milestones.map((milestone, index) => (
            <Box key={index} sx={{ mb: { xs: 3, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Stack vertically on XS screens
                  alignItems: { xs: "flex-start", sm: "center" },
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#28b463",
                    minWidth: { xs: "auto", sm: "150px" }, // Remove minWidth on XS
                    textAlign: { xs: "left", sm: "right" },
                    mr: { xs: 0, sm: 3 },
                    mb: { xs: 1, sm: 0 }, // Add margin-bottom on XS
                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive font size
                  }}
                >
                  {milestone.year}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
                      color: "#6b7280",
                    }}
                  >
                    {milestone.event}
                  </Typography>
                </Box>
              </Box>
              {index < milestones.length - 1 && (
                <Divider
                  sx={{
                    bgcolor: "#e0e0e0",
                    height: "1px",
                    mx: "auto",
                    maxWidth: { xs: "90%", sm: "80%" }, // Slightly wider on XS
                  }}
                />
              )}
            </Box>
          ))}
        </Box>


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
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
                color: "#6b7280",
                mb: { xs: 2, md: 3 }, // Reduced margin on XS
              }}
            >
              At Cynkco Technologies, we specialize in the design, development,
              and production of SmartScreen solutions, including the CT-SC
              series Smart Boards (55”, 65”, 75”, 85”, 86”, 98”, and 110”),
              robust stands like the Alpha and H-type, and accessories such as
              the CT-20 External Mic, OPS modules, and pointers. Powered by
              Android 13, our products deliver 4K UHD displays, interactive
              capabilities, and seamless integration for diverse professional
              needs.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                color: "#6b7280",
                mb: { xs: 2, md: 3 },
              }}
            >
              We operate in over [Number – please specify, e.g., 20+] countries,
              serving thousands of schools, enterprises, and healthcare
              facilities with tools that foster dynamic presentations, real-time
              collaboration, and interactive learning. Our dedicated team of
              [Employee Count – please specify, e.g., 500+] professionals
              ensures the highest standards of quality, supported by our
              certifications.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                color: "#6b7280",
                mb: { xs: 2, md: 3 },
              }}
            >
              Our mission is to [Mission Statement – please specify, e.g.,
              "empower a smarter, more connected world through innovative
              SmartScreen solutions"]. We are committed to delivering
              cutting-edge technology, exceptional customer service, and
              sustainable solutions that shape the future of interactive
              technology.
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
      </Container>
    </Box>
  );
};

export default AboutUs;