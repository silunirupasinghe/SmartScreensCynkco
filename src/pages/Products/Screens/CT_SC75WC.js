import React, { useEffect, useState } from "react";
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
  useMediaQuery,
  useTheme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GetAppIcon from "@mui/icons-material/GetApp";
import { styled } from "@mui/material/styles";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto/400.css";
import Contact from "./Contact";
import { useNavigate, useLocation } from "react-router-dom";
import colors from "../../../theme/colors";

// Note: Update these paths to the correct image locations
import CTSC75WC from "../../../Assets/Products/Screens/CTSC75WC/CT-SC75WC.png";
import CTSC75WC_stand from "../../../Assets/Products/Screens/CTSC75WC/CT-SC75WC-stand.jpg";
import CTSC75WC_side from "../../../Assets/Products/Screens/CTSC75WC/CT-SC75WC-side.png";

// Styled Components
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const SpecsHeader = styled(Box)(({ theme }) => ({
  backgroundColor: colors.darkBlue,
  color: "#fff",
  textAlign: "center",
  padding: theme.spacing(3),
}));

const CTSC75WCPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 960px

  // State for managing the currently displayed image
  const [selectedImage, setSelectedImage] = useState(CTSC75WC);

  // State for managing the download modal
  const [openDownloadModal, setOpenDownloadModal] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  // Array of available images
  const images = [
    { src: CTSC75WC, alt: "CYNKCO Smart Screen CT-SC75WC Primary" },
    { src: CTSC75WC_stand, alt: "CYNKCO Smart Screen CT-SC75WC with Stand" },
    { src: CTSC75WC_side, alt: "CYNKCO Smart Screen CT-SC75WC side View" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (formStatus.submitted) {
      const timer = setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/path/to/CT-SC75WC_brochure.pdf"; // Update with real path
        link.download = "CT-SC75WC_brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        handleCloseDownloadModal();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formStatus.submitted]);

  // Technical Specs Data
  const specsData = [
    {
      label: "Display",
      value:
        '75" IPS, 3840x2160 resolution, 1647.66(H) × 925.93(V) mm display size, 0.4296 × 0.4296 mm pixel pitch, 350 cd/m² brightness, 1200:1 contrast, 178° viewing angle, 60Hz refresh, 1.07B (10bit) colors, 72% NTSC color gamut, DLED backlight, ≥30,000 hours lifespan, 8ms response time',
    },
    {
      label: "Touch",
      value:
        "40-point infrared recognition, passive infrared pen input, ±1mm accuracy, 2mm minimum recognition object, ≤2.5mm writing height, dual-pen dual-color support, 32768(W) × 32768(D) output coordinates, ≤7ms response, supports Windows 10/8/7/XP, Android, Linux, Mac OS X, Chrome",
    },
    {
      label: "Audio",
      value: "2x15W speakers (2.0 sound track)",
    },
    {
      label: "Microphone",
      value: "8-array, 0-8m pickup distance",
    },
    {
      label: "Camera",
      value: "1 camera, 48MP, auto-focus, upper border center",
    },
    {
      label: "System",
      value:
        "android 13.0, Quad-core A55 CPU, MaliG52MP2 GPU, 4GB RAM, 32GB ROM",
    },
    {
      label: "Connectivity",
      value:
        "HDMI IN (2), USB 3.0 (1, on-board), USB 2.0 (3, including 2 front), USB-C (1), TOUCH 2.0 (1), Mini MIC IN (1), OPTICAL OUT (1), Mini LINE OUT (1), RS232 (1), RJ45 IN (1, 100Gb Ethernet), supports USB switching with channel, HDMI/RS232 & network signal input in standby mode, network sharing",
    },
    {
      label: "Power",
      value: "260W max, ≤0.5W standby, 100-240V ~ 50/60Hz 5A",
    },
    {
      label: "Dimensions & Weight",
      value:
        "1707 x 1028.5 x 88.4 mm (machine size), 110.4 mm thickness (without wall plate), 1869 x 267 x 1256 mm (package size), 600 x 400 mm VESA, M8 x 25 mm wall mounting screws, 50 kg net weight, 64.5 kg gross weight",
    },
    {
      label: "Accessories",
      value:
        "Power cord (1), 2 styluses (magnetic attachment support), wall mount (1)",
    },
    {
      label: "Environmental",
      value:
        "Operating: 0°C ~ 40°C, 10% ~ 90% RH; Storage: -20°C ~ 60°C, 10% ~ 90% RH; Working height: Less than 5000 meters",
    },
    {
      label: "Standard Modules",
      value: "PC Module: OPS62A",
    },
    { label: "Warranty", value: "2 years warranty" },
  ];

  // Key Features
  const keyFeatures = [
    "Ultra-narrow Bezel with Integrated Camera & Microphone, Simple Appearance",
    "android 13.0 Operating System",
    "4K Ultra HD Display with Full-channel 4K UI",
    "Dual-pen, Dual-color Writing for Multi-people Collaboration",
    "Wireless Screen Sharing with Network Sharing Support",
    "3mm Anti-glare Tempered Glass with High Haze OC, Anti-ambient Light Interference",
    "Hotspot Dual-band 2.4G/5G, AP+STA Mode",
    "48MP Auto-focus Camera",
    "8-array Microphone",
    "100Gb Ethernet Support",
    "Light-sensitive Brightness Adjustment with DC Dimming (Eye-care Display)",
    "±1mm High-precision Infrared Touch, Smooth Writing",
  ];

  // Introduction Points
  const introductionPoints = [
    "Advanced interactive display with integrated AV for seamless collaboration",
    "Zero-lamination process for low parallax writing and wider viewing angle",
    "High-precision infrared touch with built-in camera and microphone",
  ];

  // Keywords for Chips
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
    "Anti-glare Glass",
  ];

  // Handle Modal Open/Close
  const handleOpenDownloadModal = () => {
    setOpenDownloadModal(true);
    setFormStatus({ submitted: false, loading: false, error: null });
  };

  const handleCloseDownloadModal = () => {
    setOpenDownloadModal(false);
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
    setFormStatus({ submitted: false, loading: false, error: null });
  };

  // Handle Input Changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setFormStatus({ ...formStatus, error: null });
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError("");
    setFormStatus({ ...formStatus, error: null });
  };

  // Validate Inputs
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validatePhone = () => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phone) {
      setPhoneError("Phone number is required");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  // Handle Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    if (!isEmailValid || !isPhoneValid) return;
    setFormStatus({ submitted: false, loading: true, error: null });

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const responseText = await response.text();
      console.log("FormSubmit Response Status:", response.status);
      console.log("FormSubmit Response Text:", responseText);

      if (response.ok) {
        setFormStatus({ submitted: true, loading: false, error: null });
        form.reset();
        setEmail("");
        setPhone("");
        setEmailError("");
        setPhoneError("");
      } else {
        throw new Error(
          `Submission failed with status ${response.status}: ${responseText}`
        );
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      setFormStatus({
        submitted: false,
        loading: false,
        error: `An error occurred: ${error.message}. Please check the console for details or contact support.`,
      });
    }
  };

  return (
    <Section>
      {/* Product Overview */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={isMobile ? 2 : 4}
          alignItems="center"
          sx={{ py: isMobile ? 3 : 5, mt: 1 }}
        >
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: isMobile ? "100%" : 500,
                height: isMobile ? 300 : 400,
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image={selectedImage}
                alt="CYNKCO Smart Screen CT-SC75WC"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
            {/* Thumbnail Images */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                flexWrap: "wrap",
                mt: 2,
              }}
            >
              {images.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    cursor: "pointer",
                    border:
                      selectedImage === image.src
                        ? `2px solid ${colors.darkBlue}`
                        : "2px solid transparent",
                    borderRadius: "4px",
                    overflow: "hidden",
                    transition: "border 0.3s",
                    width: isMobile ? 40 : 50,
                    height: isMobile ? 40 : 50,
                  }}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <CardMedia
                    component="img"
                    image={image.src}
                    alt={image.alt}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                background: `linear-gradient(45deg, ${colors.gradientStart} 0%, ${colors.darkBlue} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
                mb: 1,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              CYNKCO CT-SC75WC
            </Typography>
            <Typography
              variant={isMobile ? "h5" : isTablet ? "h6" : "h5"}
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                color: "#555",
                lineHeight: 0.7,
                mb: 3,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Android/Windows
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
                    border: `1px solid ${colors.darkBlue}`,
                    borderRadius: "16px",
                    color: "#374151",
                    px: isMobile ? 1.5 : 2,
                    py: 0.5,
                    fontSize: isMobile ? "0.75rem" : "0.875rem",
                  }}
                />
              ))}
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  mt: 4,
                  justifyContent: isMobile ? "center" : "flex-start",
                  flexWrap: "wrap",
                }}
              >
                {[
                  {
                    size: '65" inch',
                    route: "/products/smart-screens/ct-sc65wc",
                  },
                  {
                    size: '75" inch',
                    route: "/products/smart-screens/ct-sc75wc",
                  },
                  {
                    size: '86" inch',
                    route: "/products/smart-screens/ct-sc86wc",
                  },
                ].map((model, index) => (
                  <Chip
                    key={index}
                    label={model.size}
                    onClick={() => navigate(model.route)}
                    clickable
                    sx={{
                      fontWeight: 600,
                      color: "#fff",
                       backgroundColor:
                        location.pathname === model.route
                          ? colors.lightBlue // active
                          : colors.darkBlue, // default
                      "&:hover": {
                        backgroundColor: colors.lightBlue,
                      },
                    }}
                  />
                ))}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    textAlign: isMobile ? "center" : "left",
                    mb: 2,
                    mx: 1,
                    mt: 1,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                  }}
                >
                  Available Sizes
                </Typography>
              </Box>
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
          CYNKCO CT-SC75WC Specifications
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
              borderBottom: `1px solid ${colors.darkBlue}`,
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
                    backgroundColor: colors.blue,
                    borderBottom: `1px solid ${colors.darkBlue}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      color: colors.darkBlue,
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
                          sx={{
                            color: colors.darkBlue,
                            mr: 1,
                            fontSize: isMobile ? 18 : 24,
                          }}
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
                    backgroundColor: colors.blue,
                    borderBottom: `1px solid ${colors.darkBlue}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      color: colors.darkBlue,
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
                          sx={{
                            color: colors.darkBlue,
                            mr: 1,
                            fontSize: isMobile ? 18 : 24,
                          }}
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
              borderBottom: `1px solid ${colors.darkBlue}`,
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
                <TableRow sx={{ backgroundColor: colors.darkBlue }}>
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
                        color: colors.darkBlue,
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

          {/* Download Brochure Section */}
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${colors.darkBlue}`,
              pb: 2,
              mt: isMobile ? 4 : 6,
              mb: 4,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Download Brochure
          </Typography>
          <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Button
              variant="contained"
              startIcon={<GetAppIcon />}
              onClick={handleOpenDownloadModal}
              sx={{
                backgroundColor: colors.darkBlue,
                color: "#fff",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                padding: isMobile ? "8px 16px" : "10px 24px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: colors.lightBlue,
                },
              }}
            >
              Download CT-SC75WC Brochure
            </Button>
          </Box>

          {/* Download Modal */}
          <Dialog open={openDownloadModal} onClose={handleCloseDownloadModal}>
            <DialogTitle>Download Brochure</DialogTitle>
            <DialogContent>
              {!formStatus.submitted ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "center",
                      color: "#757575",
                      mb: 2,
                      maxWidth: 400,
                      mx: "auto",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    Please enter your email and phone number to download the
                    CT-SC75WC brochure.
                  </Typography>
                  {formStatus.error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {formStatus.error}
                    </Alert>
                  )}
                  <form
                    action="https://formsubmit.co/55e5b9f59fce6cd0a042ec9ed8a98709"
                    method="POST"
                    onSubmit={handleFormSubmit}
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Brochure Download Request - CT-SC75WC"
                    />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for downloading the CT-SC75WC brochure!"
                    />
                    <input type="hidden" name="_template" value="table" />
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      error={!!emailError}
                      helperText={emailError}
                      required
                      InputLabelProps={{ shrink: true }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: colors.darkBlue },
                          "&:hover fieldset": { borderColor: colors.lightBlue },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.lightBlue,
                          },
                        },
                        "& .MuiInputLabel-root": { color: "#757575" },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: colors.darkBlue,
                        },
                        mb: 2,
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      error={!!phoneError}
                      helperText={phoneError}
                      required
                      InputLabelProps={{ shrink: true }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: colors.darkBlue },
                          "&:hover fieldset": { borderColor: colors.lightBlue },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.lightBlue,
                          },
                        },
                        "& .MuiInputLabel-root": { color: "#757575" },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: colors.darkBlue,
                        },
                      }}
                    />
                    <Box sx={{ textAlign: "center", mt: 3 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={formStatus.loading}
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 500,
                          fontSize: "1rem",
                          px: 6,
                          py: 1.5,
                          borderRadius: 2,
                          background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                          textTransform: "none",
                          "&:hover": {
                            background: `linear-gradient(45deg, ${colors.lightBlue}, ${colors.darkBlue})`,
                          },
                          "&:disabled": {
                            background: "#B0BEC5",
                          },
                        }}
                      >
                        {formStatus.loading ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : (
                          "Submit & Download"
                        )}
                      </Button>
                    </Box>
                  </form>
                </Box>
              ) : (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you! Your download should start shortly.
                </Alert>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDownloadModal}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </Paper>

        <Contact />
      </Container>
    </Section>
  );
};

export default CTSC75WCPage;
