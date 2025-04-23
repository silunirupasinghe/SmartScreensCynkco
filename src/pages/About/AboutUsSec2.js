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
    {
      year: "[Year – please specify, e.g., 2018]",
      event:
        "Expanded our product portfolio with the Alpha and H-type stands, designed to complement our Smart Boards. We also established our first international office in [Location – please specify], marking our global expansion.",
    },
    {
      year: "[Year – please specify, e.g., 2020]",
      event:
        "Achieved a milestone in exports, reaching over [Number – please specify, e.g., 15] countries. Our CT-SC series Smart Boards became a preferred choice for interactive learning and presentations worldwide.",
    },
    {
      year: "[Year – please specify, e.g., 2022]",
      event:
        "Introduced Android 11-powered Smart Boards, enhancing user experience with faster performance and advanced features. We also obtained [Certifications – please specify, e.g., CE, FCC, RoHS] certifications, ensuring global quality standards.",
    },
    {
      year: "2024",
      event:
        "Upgraded our Smart Boards to Android 13, offering improved split-screen functionality and user privacy settings. Our production facility expanded to [Facility Size – please specify, e.g., 50,000 sqm], doubling our capacity to meet growing demand.",
    },
    {
      year: "2025",
      event:
        "Celebrating [Years – please specify, e.g., 10] years of innovation, Cynkco continues to lead the SmartScreen industry, serving thousands of clients globally with a team of [Employee Count – please specify, e.g., 500+] dedicated professionals.",
    },
  ];

  // Certifications data for Cynkco Technologies
  const certifications = [
    {
      name: "[Certification – please specify, e.g., CE]",
      description:
        "Ensures compliance with European safety, health, and environmental protection standards.",
    },
    {
      name: "[Certification – please specify, e.g., FCC]",
      description:
        "Certifies that our products meet U.S. regulations for electromagnetic interference.",
    },
    {
      name: "[Certification – please specify, e.g., RoHS]",
      description:
        "Confirms our commitment to restricting hazardous substances in electronic products.",
    },
    {
      name: "[Certification – please specify, e.g., ISO9001]",
      description:
        "Reflects our adherence to international quality management standards.",
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

        {/* Certifications Section */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Box sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 3, md: 4 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                mb: { xs: 4, md: 5 },
                textAlign: "center",
                fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.3rem" }, // Responsive heading size
                lineHeight: 1.0,
                background: "linear-gradient(45deg, #006400, #0D47A1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Certifications
            </Typography>

            <Box
              sx={{
                background: "#F1FFF7",
                py: { xs: 4, md: 6 }, // Reduced padding on XS
                px: { xs: 1, sm: 2, md: 10 }, // Responsive padding
                my: { xs: 2, md: 4 },
              }}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={12}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3600 }}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 8 }, // Adjusted for XS screens
                  600: { slidesPerView: 1, spaceBetween: 10 },
                  768: { slidesPerView: 2, spaceBetween: 12 },
                  1024: { slidesPerView: 3, spaceBetween: 12 },
                  1280: { slidesPerView: 4, spaceBetween: 12 }, // Large screens
                  1536: { slidesPerView: 4, spaceBetween: 12 }, // XL screens
                }}
                style={{ paddingBottom: "40px", paddingTop: "10px" }} // Reduced paddingBottom for smaller screens
              >
                {certifications.map((certification, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        background: "#fff",
                        borderRadius: 4,
                        overflow: "hidden",
                        mx: "auto",
                        maxWidth: { xs: 300, sm: 320, md: 360 }, // Responsive card width
                        height: { xs: 360, sm: 380, md: 400 }, // Responsive height
                        border: 1,
                        borderColor: "#24ac4c",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        component="img"
                        src={certification.name}
                        alt={certification.description}
                        sx={{
                          width: "100%",
                          height: { xs: 180, sm: 200, md: 220 }, // Responsive image height
                          objectFit: "cover",
                        }}
                      />
                      <Box sx={{ p: { xs: 1.5, md: 2 }, overflow: "hidden", flexGrow: 1 }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: 400,
                            fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.92rem" }, // Responsive font size
                            lineHeight: 1.5,
                            maxHeight: "4.5rem",
                            overflow: "hidden",
                          }}
                        >
                          {certification.description}
                        </Typography>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
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