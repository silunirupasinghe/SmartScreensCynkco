import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import medicalImg from "../../Assets/Home/hospital.jpg";
import meetingImg from "../../Assets/Home/meeting.jpg";
import educationImg from "../../Assets/Home/classroom.jpeg";
import retailImg from "../../Assets/Home/store.jpg";

import colors from "../../theme/colors"; // Import the colors
// Styled component for the section with gradient background
const SolutionsSection = styled(Box)(({ theme }) => ({
  py: { xs: 4, sm: 6, md: 10 }, // Responsive padding
  my: { xs: 2, sm: 3, md: 4 }, // Responsive margin
}));

// Styled component for section headers
const SectionHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" }, // Responsive font size
  lineHeight: 1.2,
  background: `linear-gradient(45deg, ${colors.gradientStart} 0%, ${colors.darkBlue} 100%)`, // Use colors from colors.js
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  mb: { xs: 2, sm: 3, md: 4 }, // Responsive margin-bottom
  textAlign: "center",
}));

// Styled component for section content
const SectionContent = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
  color: "grey.600",
  textAlign: "justify",
  mb: { xs: 2, sm: 3, md: 6 }, // Responsive margin-bottom
  px: { xs: 2, sm: 3, md: 2 }, // Responsive padding-x
}));

const solutions = [
  {
    title:
      "Education Sector: Transforming Learning with Interactive Smart Boards",
    description:
      "Interactive smart boards revolutionize education by enhancing lesson efficiency through dynamic interactivity. Designed for schools and universities, these devices feature high-quality displays that ensure clear visuals for all students. Multi-user touch capabilities allow simultaneous collaboration, enabling students to solve problems or annotate diagrams together, saving time and boosting engagement. Writing tools with multiple input options streamline group discussions, while wireless connectivity provides instant access to digital resources, reducing preparation time. Eye-friendly features like glare reduction improve focus during long sessions, creating a technology-driven environment that maximizes teaching efficiency and student participation.",
    image: educationImg,
  },
  {
    title: "Healthcare Sector: Enhancing Healthcare with Digital Smart Boards",
    description:
      "In healthcare, smart boards improve operational efficiency by integrating seamlessly with medical systems to display real-time patient data, schedules, and imaging. High-precision touch functionality allows staff to annotate plans quickly and accurately, minimizing delays in decision-making. Built-in audiovisual tools enable remote consultations, reducing the need for in-person meetings and speeding up collaboration across locations. Clear, adjustable displays ensure visibility in varied lighting, while compatibility with healthcare apps streamlines workflows, enhancing communication and patient care efficiency in busy hospitals and clinics.",
    image: medicalImg,
  },
  {
    title: "Business Sector: Elevating Operations with Digital Smart Boards",
    description:
      "Smart boards elevate business efficiency in retail, hospitality, and finance by delivering vibrant, dynamic content for presentations and customer engagement. Interactive touch features enable real-time interaction with clients, speeding up service delivery and feedback. Connectivity with multiple devices ensures quick integration of data and visuals, while network sharing allows instant updates to displays, eliminating manual adjustments. Durable designs reduce downtime and maintenance, ensuring consistent performance that enhances operational efficiency and strengthens brand presence in competitive markets.",
    image: retailImg,
  },
  {
    title: "Meeting Room Solutions: Seamless Collaboration for Teams",
    description:
      "Smart boards transform meeting rooms into efficient collaboration hubs with tools that streamline teamwork. High-accuracy touch and multi-user input options allow real-time annotations by multiple participants, accelerating brainstorming and decision-making. Audiovisual features support clear video conferencing, minimizing communication delays for remote teams. Wireless data sharing and integration with business tools enable quick access to reports and visuals, reducing setup time. Sleek, reliable designs ensure uninterrupted sessions, boosting productivity and communication efficiency in corporate and government settings.",
    image: meetingImg,
  },
];

const SolutionSec2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile view

  return (
    <Box>
      <SolutionsSection>
        <Container maxWidth="lg">
          {/* Main Header */}
          <Box sx={{ textAlign: "center", my: { xs: 2, sm: 3, md: 4 } }}>
            <SectionContent sx={{ my: { xs: 2, sm: 4, md: 8 } }}>
              Interactive <strong>smart boards</strong> are engineered to
              enhance collaboration, communication, and productivity across
              diverse sectors. With advanced displays, multi-user interactivity,
              and seamless connectivity, these <strong>smart boards</strong>{" "}
              streamline workflows and deliver efficient solutions for
              education, healthcare, business, and meeting rooms, meeting the
              demands of modern environments with cutting-edge technology.
            </SectionContent>
          </Box>

          {/* Sectors Grid */}
          {solutions.map((solution, index) => (
            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 4 }} // Responsive spacing
              justifyContent="center"
              key={solution.title}
              sx={{ mb: { xs: 4, sm: 4, md: 4 } }} // Responsive margin-bottom
            >
              <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems="center"
                sx={{
                  flexDirection: isMobile
                    ? "column"
                    : index % 2 === 0
                    ? "row"
                    : "row-reverse", // Alternate image and text sides on desktop
                  px: { xs: 1, sm: 2 }, // Responsive padding-x
                  py: { xs: 1, sm: 2 }, // Responsive padding-y
                }}
              >
                {/* Image Section */}
                <Grid
                  item
                  size={{ sm: 12, md: 6 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    component="img"
                    src={solution.image}
                    sx={{
                      width: "100%",
                      maxWidth: { xs: 250, sm: 350, md: 500 }, // Responsive max-width
                      height: "auto",
                      display: "block",
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />
                </Grid>

                {/* Description Section */}
                <Grid
                  item
                  size={{ sm: 12, md: 6 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "medium",
                        color: colors.darkBlue,
                        mb: { xs: 1, sm: 2 }, // Responsive margin-bottom
                        fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive font size
                        textAlign: { xs: "center", md: "left" }, // Center on mobile, left on desktop
                      }}
                    >
                      {solution.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" }, // Responsive font size
                        color: "grey.600",
                        textAlign: { xs: "justify", md: "justify" },
                        lineHeight: 1.5,
                      }}
                      dangerouslySetInnerHTML={{ __html: solution.description }} // Render HTML for bold smart boards
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Container>
      </SolutionsSection>

      {/* Why Choose Smart Boards Section */}
      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 2, sm: 3, md: 4 }, // Responsive margin-top
          py: { xs: 2, sm: 3, md: 4 }, // Responsive padding-y
          background: colors.blue,
        }}
      >
        <SectionHeader variant="h4" sx={{ mb: { xs: 1, sm: 2 } }}>
          Why Choose Smart Boards?
        </SectionHeader>
        <Box
          sx={{
            maxWidth: { xs: "90%", sm: "85%", md: "800px" }, // Responsive max-width
            mx: "auto",
            px: { xs: 2, sm: 3, md: 0 }, // Responsive padding-x
          }}
        >
          {[
            {
              text: "- <strong>Enhanced Visual Clarity:</strong> High-quality displays with glare reduction ensure clear visibility, speeding up comprehension and reducing time spent adjusting for lighting conditions.",
            },
            {
              text: "- <strong>Streamlined Collaboration:</strong> Multi-user touch and writing tools enable simultaneous input, accelerating group tasks and decision-making across industries.",
            },
            {
              text: "- <strong>Efficient Integration:</strong> Seamless connectivity with devices and software minimizes setup time, ensuring quick access to resources and smooth workflows.",
            },
            {
              text: "- <strong>Long-Term Reliability:</strong> Durable designs reduce downtime and maintenance, providing consistent performance that enhances operational efficiency.",
            },
            {
              text: "- <strong>Improved Remote Interaction:</strong> Audiovisual tools facilitate fast, clear communication with remote participants, cutting delays and boosting teamwork efficiency.",
            },
          ].map((item, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" }, // Responsive font size
                color: "grey.600",
                mb: { xs: 1.5, sm: 2 }, // Responsive margin-bottom
                textAlign: "left", // Left-align for readability
              }}
              dangerouslySetInnerHTML={{ __html: item.text }} // Render HTML for bold text
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SolutionSec2;
