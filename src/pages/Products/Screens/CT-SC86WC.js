import React, { useEffect } from "react";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { styled } from "@mui/material/styles";
import "@fontsource/poppins/700.css"; // Bold for headings
import "@fontsource/roboto/400.css"; // Regular for body text
import Contact from "./Contact";

// Note: Update this path to the correct CT-SC86WC image
import CTSC86WC from "../../../Assets/Products/Screens/CT-SC86WC.png"; // Adjust path as needed

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

const CTSC86WCPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 960px

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  // Technical Specs Data from CT-SC86WC PDF
  const specsData = [
    {
      label: "Display",
      value:
        '86" IPS, 3840x2160, 350 cd/m², 1200:1 contrast, 178° viewing angle, 60Hz refresh',
    },
    {
      label: "Touch",
      value:
        "40-point infrared, ±1mm accuracy, ≤7ms response, dual-pen dual-color support",
    },
    { label: "Audio", value: "2x15W speakers (2.0 sound track)" },
    {
      label: "Microphone",
      value: "8-array, 0-8m pickup distance",
    },
    {
      label: "Camera",
      value: "48MP, auto-focus, upper border center",
    },
    {
      label: "System",
      value:
        "Android 11.0, Quad-core A55 CPU, MaliG52MP2 GPU, 4GB RAM, 32GB ROM",
    },
    {
      label: "Connectivity",
      value:
        "HDMI IN (2), USB 3.0 (1), USB 2.0 (3), USB-C (1), TOUCH 2.0 (1), MIC IN (1), OPTICAL OUT (1), LINE OUT (1), RS232 (1), RJ45 IN (1), 100Gb Ethernet",
    },
    {
      label: "Power",
      value: "360W max, ≤0.5W standby, 100-240V ~ 50/60Hz 5A",
    },
    {
      label: "Dimensions",
      value: "1953.5 x 1168 x 88.4 mm (without wall plate), 68 kg",
    },
    { label: "Accessories", value: "Power cord (1), 2 styluses, wall mount" },
    {
      label: "Environmental",
      value:
        "Operating: 0°C ~ 40°C, 10% ~ 90% RH; Storage: -20°C ~ 60°C, 10% ~ 90% RH",
    },
  ];

  // Key Features for Overview (derived from CT-SC86WC PDF)
  const keyFeatures = [
    "Ultra-narrow Bezel with Integrated Camera & Microphone",
    "Android 11.0",
    "4K Ultra HD Display",
    "Dual-pen, Dual-color Writing",
    "Wireless Screen Sharing",
    "Anti-glare Tempered Glass",
    "Hotspot Dual-band 2.4G/5G",
    "48MP Auto-focus Camera",
    "8-array Microphone",
    "100Gb Ethernet Support",
  ];

  // Introduction Points (derived from CT-SC86WC PDF)
  const introductionPoints = [
    "Advanced interactive display with integrated AV for seamless collaboration",
    "Zero-lamination process for low parallax writing",
    "High-precision infrared touch with built-in camera and microphone",
  ];

  // Keywords for Chips (updated to reflect CT-SC86WC features)
  const keywords = [
    "Interactive Whiteboard",
    "Ultra-narrow Bezel",
    "4K UHD Display",
    "Infrared Touch",
    "Dual-pen Writing",
    "Dual-band Hotspot",
    "Eye-care Display",
    "48MP Camera",
    "8-array Microphone",
    "100Gb Ethernet",
  ];

  return (
    <Section>
      {/* Product Overview */}
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 2 : 4} alignItems="center" sx={{ py: isMobile ? 4 : 8 }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CardMedia
              component="img"
              image={CTSC86WC}
              alt="CYNKCO Smart Screen CT-SC86WC"
              sx={{
                maxWidth: isMobile ? "85%" : "90%",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant={isMobile ? "h4" : "h3" }
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                background: "linear-gradient(90deg, #006400, #0D47A1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
                mb: 1,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              CYNKCO CT-SC86WC
            </Typography>
            <Typography
              variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                color: "#555",
                lineHeight: 0.7,
                mb: 3,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Android
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
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
                    px: isMobile ? 1.5 : 2,
                    py: 0.5,
                    fontSize: isMobile ? "0.75rem" : "0.875rem",
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
          variant={isMobile ? "h5" : "h4"}
          sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
        >
          CYNKCO CT-SC86WC Specifications
        </Typography>
      </SpecsHeader>

      {/* Specifications with Accordion */}
      <Container maxWidth="lg" sx={{ my: isMobile ? 4 : 6 }}>
        <Paper elevation={3} sx={{ p: isMobile ? 2 : 4, borderRadius: "8px" }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${greenDark}`,
              pb: 2,
              mb: 4,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Overview
          </Typography>
          <Grid container spacing={isMobile ? 1 : 2}>
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
                      fontSize: isMobile ? "0.9rem" : "1rem",
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
                        <CheckCircleOutlineIcon
                          sx={{ color: green, mr: 1, fontSize: isMobile ? 18 : 24 }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#374151",
                            fontSize: isMobile ? "0.85rem" : "1rem",
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
                      fontSize: isMobile ? "0.9rem" : "1rem",
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
                        <CheckCircleOutlineIcon
                          sx={{ color: green, mr: 1, fontSize: isMobile ? 18 : 24 }}
                        />
                        <Typography
                          sx={{
                            fontFamily: "Roboto, sans-serif",
                            color: "#374151",
                            fontSize: isMobile ? "0.85rem" : "1rem",
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
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${greenDark}`,
              pb: 2,
              mt: isMobile ? 4 : 6,
              mb: 4,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Technical Specifications
          </Typography>
          <TableContainer>
            <Table sx={{ minWidth: isMobile ? "auto" : 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: greenDark }}>
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? "0.8rem" : "1rem",
                      padding: isMobile ? "8px" : "16px",
                    }}
                  >
                    Specification
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? "0.8rem" : "1rem",
                      padding: isMobile ? "8px" : "16px",
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
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        padding: isMobile ? "8px" : "16px",
                      }}
                    >
                      {spec.label}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Roboto, sans-serif",
                        color: "#374151",
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        padding: isMobile ? "8px" : "16px",
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

export default CTSC86WCPage;