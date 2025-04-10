import React from "react";
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

import medicalImg from "../../Assets/Home/hospital.jpg";
import meetingImg from "../../Assets/Home/meeting.jpg";
import educationImg from "../../Assets/Home/classroom.jpeg";
import retailImg from "../../Assets/Home/retail.jpg";

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
  background: "linear-gradient(45deg, #006400, #0D47A1)",
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
    title: "Education Sector: Transforming Learning with Smart Whiteboards",
    description:
      "more interactive and engaging. Designed for schools, universities, and training institutions, our interactive flat panels (IFPs) support multimedia presentations and enable real-time collaboration. Teachers can display educational content, conduct interactive lessons, and allow students to participate by solving problems or drawing diagrams directly on the whiteboard. With Google EDLA certification, educators gain access to a vast array of educational resources, while multi-touch technology (supporting up to 10-point touch) allows multiple students to interact simultaneously, fostering group discussions. The M6A PRO’s ultra-high-definition display ensures vibrant visuals, making complex concepts easier to understand. CYNKCO whiteboards enhance teaching effectiveness, boost student participation, and create a dynamic, technology-driven learning environment.",
    image: educationImg,
  },
  {
    title: "Medical Sector: Enhancing Healthcare with Digital Patient Whiteboards",
    description:
      "In healthcare, CYNKCO electronic patient whiteboards streamline operations and improve communication between medical professionals and patients. Integrated with Hospital Information Systems (HIS), the M6A PRO provides nurses with a clear overview of patient beds, surgery schedules, and real-time alerts, improving the efficiency and accuracy of medical services. In operating rooms, surgeons can display imaging data such as CT scans and MRIs, annotate surgical plans, and access electronic medical records instantly, ensuring precision during procedures. The whiteboard’s recording function allows the surgical process to be saved for analysis and training. For cosmetic surgery institutions, CYNKCO IFPs enable seamless collaboration by allowing surgeons to brief teams, draw key points, and conduct remote consultations via video conferencing. With Dual WiFi and Android 13.0, CYNKCO whiteboards support medical informatization, simplify information exchange, and improve patient outcomes by fostering better communication in healthcare settings.",
    image: medicalImg,
  },
  {
    title: "Business Sector: Elevating Operations with Commercial Digital Screens",
    description:
      "CYNKCO smartboards, such as the M6A PRO, are the ideal solution for modern enterprises, hospitality displays, and the catering industry. Our commercial digital screens deliver ultra-high-definition resolution and vibrant colors, ensuring crystal-clear visuals that enhance brand image and customer experience. These screens feature interactive touch capabilities and support multiple input and output interfaces, making them perfect for presentations, advertising, and customer engagement. In financial institutions, CYNKCO digital signage systems transform bank halls by replacing outdated paper posters with dynamic displays that combine video, images, and real-time data. Customers can access financial product information, market trends, and personalized recommendations, improving service efficiency and customer experience. CYNKCO screens are built for durability and stability, reducing maintenance costs and downtime, making them a reliable choice for businesses aiming to achieve digital transformation and market competitiveness.",
    image: retailImg,
  },
  {
    title: "Meeting Room Solutions: Seamless Collaboration for Teams",
    description:
      "CYNKCO interactive whiteboards, like the M6A PRO, are essential for modern meeting rooms, enabling dynamic presentations, real-time collaboration, and seamless data sharing. With Google EDLA certification and Android 13.0, our smartboards support video conferencing and remote collaboration, allowing teams to connect with remote participants worldwide for uninterrupted collaboration. The multi-touch technology enables multiple users to annotate and discuss simultaneously, making meetings more engaging and productive. The M6A PRO integrates with various charts and data presentation tools, ideal for business reports and market analysis, facilitating data-driven decision-making. In exhibition halls, CYNKCO digital whiteboards can be interconnected with video walls to create immersive displays. Whether in corporate offices or government settings, CYNKCO meeting room solutions boost productivity, enhance communication, and streamline information sharing, ensuring every meeting is effective and impactful.",
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
              CYNKCO interactive whiteboards, such as the M6A PRO, are designed
              to revolutionize collaboration, communication, and engagement
              across multiple sectors. With Google EDLA certification, Android
              13.0, and Dual WiFi capabilities, CYNKCO provides cutting-edge
              technology to meet the needs of education, healthcare, business,
              and meeting room environments. Our solutions offer seamless
              integration, superior display quality, and versatile applications
              to enhance productivity and user experience in every setting.
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
                  size={{sm:12, md:6}}
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
                  size={{sm:12, md:6}}
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
                        color: "#006400",
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
                    >
                      {solution.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Container>
      </SolutionsSection>

      {/* Why Choose CYNKCO Section */}
      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 2, sm: 3, md: 4 }, // Responsive margin-top
          py: { xs: 2, sm: 3, md: 4 }, // Responsive padding-y
          background: "#F1FFF7",
        }}
      >
        <SectionHeader variant="h4" sx={{ mb: { xs: 1, sm: 2 } }}>
          Why Choose CYNKCO?
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
              text: "- <strong>Superior Display Quality:</strong> CYNKCO utilizes cutting-edge display technology to deliver ultra-high-definition resolution and vibrant colors, ensuring every detail is crystal clear.",
            },
            {
              text: "- <strong>Versatile Applications:</strong> From education and healthcare to business and meeting rooms, our solutions support a wide range of scenarios with interactive touch capabilities and multiple content formats.",
            },
            {
              text: "- <strong>Seamless Integration:</strong> CYNKCO whiteboards, with Google EDLA certification and Android 13.0, integrate with existing systems like HIS, EMRs, and financial platforms, ensuring real-time updates and efficient workflows.",
            },
            {
              text: "- Concurrent operation in various environments with minimal maintenance.",
            },
            {
              text: "- <strong>Global Collaboration:</strong> With Dual WiFi and video conferencing features, CYNKCO breaks geographical barriers, enabling teams to work together seamlessly from anywhere in the world.",
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