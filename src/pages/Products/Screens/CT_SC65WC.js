import React, {useEffect} from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { styled } from "@mui/material/styles";
import "@fontsource/poppins/700.css"; // Bold for headings
import "@fontsource/roboto/400.css"; // Regular for body text
import Contact from "./Contact";

import CTSC65WC from "../../../Assets/Products/Screens/CT-SC65WC.png";

// Theme Colors
const green = "#24AC4C";
const greenDark = "#006400";

// Styled Components
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  backgroundColor: "#F1FFF7", // Equivalent to bg-gray-100
}));

const SpecsHeader = styled(Box)(({ theme }) => ({
  backgroundColor: greenDark,
  color: "#fff",
  textAlign: "center",
  padding: theme.spacing(3),
}));

const ContactSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, ${greenDark}, ${green})`,
  color: "#fff",
  padding: theme.spacing(4),
  textAlign: "center",
  borderRadius: "12px",
  marginTop: theme.spacing(6),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  color: greenDark,
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  padding: theme.spacing(1.5, 4),
  borderRadius: "25px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: green,
    color: "#fff",
  },
}));

const CTSC65WCPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);
  // Technical Specs Data from CT-SC65WC
  const specsData = [
    {
      label: "Display",
      value:
        '65" IPS, 3840x2160, 350 cd/m², 1200:1 contrast, 178° viewing angle',
    },
    {
      label: "Touch",
      value:
        "40-point infrared, ±1mm accuracy, ≤7ms response, dual-pen support",
    },
    { label: "Audio", value: "2x15W speakers, 8-array mic (0-8m pickup)" },
    { label: "Camera", value: "48MP, auto-focus, top-center mounted" },
    {
      label: "Connectivity",
      value:
        "HDMI IN (2), USB 3.0 (1), USB 2.0 (3), USB-C (1), RS232, RJ45 (100Gb)",
    },
    {
      label: "System",
      value: "Android 11.0, Quad-core A55 CPU, 4GB RAM, 32GB ROM",
    },
    { label: "Power", value: "180W max, ≤0.5W standby, 100-240V" },
    { label: "Dimensions", value: "1485 x 905.5 x 88.4 mm, 36 kg" },
    { label: "Accessories", value: "Power cord, 2 styluses, wall mount" },
  ];

  // Key Features for Overview
  const keyFeatures = [
    "ALL-IN-ONE design",
    "Android 11.0",
    "48MP Built-in Camera",
    "8-array Microphone",
    "4K Ultra HD Display",
    "Dual-pen, Dual-color Writing",
    "Wireless Screen Sharing",
    "Anti-glare Tempered Glass",
  ];

  // Introduction Points
  const introductionPoints = [
    "Professional conferencing solution with advanced AV capabilities",
    "Fit to All Rooms",
    "One-Stop Collaboration Solution",
  ];

  // Keywords for Chips
  const keywords = [
    "Smart Collaboration Whiteboard",
    "High-Resolution Display",
    "Advanced Security",
    "Eco-Friendly Design",
    "Seamless Connectivity",
    "Professional AV Experience",
  ];

  return (
    <Section>
      {/* Product Overview */}
      <Container>
        <Grid container spacing={4} alignItems="center" sx={{ py: 8 }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CardMedia
              component="img"
              image={CTSC65WC}
              alt="CYNKCO Smart Screen CT-SC65WC"
              sx={{ maxWidth: "90%" }}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                background: "linear-gradient(90deg, #006400, #0D47A1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              CYNKCO CT-SC65WC
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                color: greenDark,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Android/Windows
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {keywords.map((keyword, index) => (
                <Chip
                  key={index}
                  label={keyword}
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 500,
                    backgroundColor: "#fff",
                    border: `1px solid ${greenDark}`,
                    borderRadius: "16px",
                    color: "#374151",
                    px: 2,
                    py: 0.5,
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Specifications Section Header */}
      <SpecsHeader>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
        >
          CYNKCO CT-SC65WC Specifications
        </Typography>
      </SpecsHeader>

      {/* Specifications with Accordion */}
      <Container sx={{ my: 6 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: "8px" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${greenDark}`,
              pb: 2,
              mb: 4,
            }}
          >
            Overview
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: "#F1FFF7",
                    borderBottom: `1px solid ${greenDark}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      color: greenDark,
                    }}
                  >
                    Key Features
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {keyFeatures.map((feature, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleOutlineIcon sx={{ color: green, mr: 1 }} />
                        <Typography
                          sx={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#374151",
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: "#F1FFF7",
                    borderBottom: `1px solid ${greenDark}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      color: greenDark,
                    }}
                  >
                    Introduction
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {introductionPoints.map((point, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleOutlineIcon sx={{ color: green, mr: 1 }} />
                        <Typography
                          sx={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#374151",
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${greenDark}`,
              pb: 2,
              mt: 6,
              mb: 4,
            }}
          >
            Technical Specifications
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: greenDark }}>
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Specification
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {specsData.map((spec, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 700,
                        color: greenDark,
                      }}
                    >
                      {spec.label}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        color: "#374151",
                      }}
                    >
                      {spec.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Contact />
      </Container>
    </Section>
  );
};

export default CTSC65WCPage;
