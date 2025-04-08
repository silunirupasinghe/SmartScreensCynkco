import React,{useEffect} from "react";
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

// Note: Update this path to the correct CT-SC65A image
import CTSC65A from "../../../Assets/Products/Screens/CT-SC65A.png";

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

const CTSC65APage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);
  // Technical Specs Data from CT-SC65A PDF
  const specsData = [
    {
      label: "Display",
      value:
        '65" IPS, 3840x2160, 350 cd/m², 1200:1 contrast, 178° viewing angle, 60Hz refresh',
    },
    {
      label: "Touch",
      value:
        "40-point infrared, ±1mm accuracy, ≤7ms response, dual-pen dual-color support",
    },
    { label: "Audio", value: "2x15W speakers (2.0 sound track)" },
    {
      label: "System",
      value:
        "Android 11.0, Quad-core A55 CPU, MaliG52MP2 GPU, 4GB RAM, 32GB ROM",
    },
    {
      label: "Connectivity",
      value:
        "HDMI IN (2), USB 3.0 (1), USB 2.0 (3), USB-C (1), TOUCH 2.0 (1), MIC IN (1), OPTICAL OUT (1), LINE OUT (1), RS232 (1), RJ45 IN (1)",
    },
    {
      label: "Power",
      value: "180W max, ≤0.5W standby, 100-240V ~ 50/60Hz 5.5A",
    },
    {
      label: "Dimensions",
      value: "1485 x 891.5 x 88.4 mm (without wall plate), 36 kg",
    },
    { label: "Accessories", value: "Power cord (1), 2 styluses, wall mount" },
    {
      label: "Environmental",
      value:
        "Operating: 0°C ~ 40°C, 10% ~ 90% RH; Storage: -20°C ~ 60°C, 10% ~ 90% RH",
    },
  ];

  // Key Features for Overview (derived from PDF)
  const keyFeatures = [
    "Ultra-narrow Bezel Design",
    "Android 11.0",
    "4K Ultra HD Display",
    "Dual-pen, Dual-color Writing",
    "Wireless Screen Sharing",
    "Anti-glare Tempered Glass",
    "Hotspot Dual-band 2.4G/5G",
    "Light-sensitive Brightness Adjustment",
  ];

  // Introduction Points (derived from PDF)
  const introductionPoints = [
    "Advanced interactive display for professional collaboration",
    "Zero-lamination process for low parallax writing",
    "High-precision infrared touch technology",
  ];

  // Keywords for Chips (updated to reflect CT-SC65A features)
  const keywords = [
    "Interactive Whiteboard",
    "Ultra-narrow Bezel",
    "4K UHD Display",
    "Infrared Touch",
    "Dual-pen Writing",
    "Dual-band Hotspot",
    "Eye-care Display",
    "Seamless Collaboration",
  ];

  return (
    <Section>
      {/* Product Overview */}
      <Container>
        <Grid container spacing={4} alignItems="center" sx={{ py: 8 }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CardMedia
              component="img"
              image={CTSC65A}
              alt="CYNKCO Smart Screen CT-SC65A"
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
              CYNKCO CT-SC65A
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
              Android
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
          CYNKCO CT-SC65A Specifications
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

export default CTSC65APage;
