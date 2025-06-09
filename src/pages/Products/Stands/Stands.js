import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Fade } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Images
import CT590 from "../../../Assets/Products/CT-590.png";
import CT1700 from "../../../Assets/Products/CT-1700.png";
import CT1800 from "../../../Assets/Products/CT-1800.png";
import CT2100 from "../../../Assets/Products/CT-2100.png";

import Standhero from "./StandHero";
import colors from "../../../theme/colors";

// Define the collections with details and sizes
const collections = [
  {
    name: "H TYPE COLLECTION",
    description: `The H Type Collection is designed for versatility and durability, catering to a wide range of display sizes from 32 to 120 inches. Crafted with cold-rolled steel, these stands offer robust support, adjustable lifting ranges, and integrated features like camera and center trays, making them ideal for educational, corporate, and digital signage applications.`,
    products: [
      {
        name: "CT-1700",
        image: CT1700,
        size: "32–70 inches",
        details: {
          description: `The CT-1700 is a compact yet rugged smart stand crafted for displays between 32 and 70 inches. Designed with flexibility in mind, it is ideal for smaller collaborative settings, such as classrooms or compact conference rooms.`,
          liftingRange: "1250–1500mm",
          loadCapacity: "100KG",
          material: "Cold-rolled steel",
          features: ["Camera tray", "Center tray", "Varied VESA mounting patterns"],
        },
      },
      {
        name: "CT-1800",
        image: CT1800,
        size: "42–86 inches",
        details: {
          description: `Built for performance and ergonomic precision, the CT-1800 supports medium to large displays. It is well-suited for education, boardrooms, and digital signage.`,
          liftingRange: "1100–1500mm",
          loadCapacity: "200KG",
          material: "Cold-rolled steel",
          features: [
            "Camera tray",
            "Center tray",
            "Hole distances up to 1140mm horizontally and 630mm vertically",
          ],
        },
      },
      {
        name: "CT-2100",
        image: CT2100,
        size: "52–120 inches",
        details: {
          description: `Engineered for high-impact visual environments, the CT-2100 supports large displays. It offers strength and flexibility for large-scale presentations.`,
          liftingRange: "1100–1500mm",
          loadCapacity: "200KG",
          material: "Cold-rolled steel",
          features: ["Camera tray", "Center tray", "Wide hole distance compatibility"],
        },
      },
    ],
  },
  {
    name: "π TYPE COLLECTION",
    description: `The π Type Collection is engineered for premium, large-scale display solutions, supporting screens from 86 to 120 inches. These heavy-duty stands feature a 200KG load capacity, 360° horizontal rotation, and innovative additions like wire harness card designs and integrated storage boxes, perfect for professional and organized environments.`,
    products: [
      {
        name: "CT-590 (Black)",
        image: CT590,
        size: "86–120 inches",
        details: {
          description: `The CT-590 (Black) is a heavy-duty stand built for large displays. Engineered for professional use, it offers precision and adaptability for premium setups.`,
          liftingRange: "TV center height: 1450mm",
          loadCapacity: "200KG",
          material: "Cold-rolled steel",
          features: [
            "360° horizontal rotation",
            "Wire harness card design",
            "Integrated storage box",
            "Hole distance range: 200x200mm to 1200x600mm",
          ],
        },
      },
      {
        name: "CT-R1",
        image: CT590,
        size: "86–120 inches",
        details: {
          description: `The CT-R1 is a heavy-duty stand built for large displays. Engineered for professional use, it ensures long-lasting stability and adaptability.`,
          liftingRange: "TV center height: 1450mm",
          loadCapacity: "200KG",
          material: "Cold-rolled steel",
          features: [
            "360° horizontal rotation",
            "Wire harness card design",
            "Integrated storage box",
            "Hole distance range: 200x200mm to 1200x600mm",
          ],
        },
      },
    ],
  },
];

const StandsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    if (formStatus.submitted) {
      const timer = setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/brochures/cyncko_stands_brochure.pdf"; // Update with real path
        link.download = "Stands_Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        handleCloseDownloadModal();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formStatus.submitted]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
    <Box>
      <Standhero />
      <Box sx={{ background: "#FAFFFC", py: { xs: 3, sm: 4, md: 6 } }}>
        <Container maxWidth="lg">
          {/* Tabs for Collections */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            sx={{
              mb: { xs: 3, sm: 4, md: 6 },
              "& .MuiTab-root": {
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                color: colors.darkBlue,
                textTransform: "none",
              },
              "& .Mui-selected": {
                color: colors.lightBlue,
              },
              "& .MuiTabs-indicator": {
                backgroundColor: colors.lightBlue,
              },
            }}
          >
            {collections.map((collection, index) => (
              <Tab key={index} label={collection.name} />
            ))}
          </Tabs>

          {/* Collection Description */}
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 3, sm: 4, md: 5 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              color: "#333",
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            {collections[activeTab].description}
          </Typography>

          

          

          {/* Product Images and Details Section */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${colors.darkBlue}`,
              pb: 2,
              mb: 4,
              textAlign: "center",
            }}
          >
            Our Stands
          </Typography>
          <Grid container spacing={{ xs: 4, sm: 4, md: 2 }} justifyContent="center">
            {collections[activeTab].products.map((product, index) => (
              <Grid  key={index} size={{md:4, sm:12}}>
                <Fade in timeout={1000 + index * 200}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* Stand Image */}
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        maxWidth: { xs: "300px", sm: "300px", md: "400px" },
                        height: "auto",
                        borderRadius: 2,
                        objectFit: "contain",
                        mb: 2,
                      }}
                    />
                    
                    
                    {/* Stand Details Accordion */}
                    <Accordion
                      sx={{
                        width: "100%",
                        maxWidth: { xs: "300px", sm: "350px", md: "400px" },
                        
                        borderRadius: "8px",
                        "&:before": { display: "none" },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          backgroundColor: colors.blue,
                          "& .MuiAccordionSummary-content": {
                            alignItems: "center",
                          },
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 500,
                            color: colors.darkBlue,
                          }}
                        >
                          {product.name}  {"["} {product.size} {"]"}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              color: "#333",
                              mb: 2,
                              lineHeight: 1.6,
                            }}
                          >
                            {product.details.description}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: 500,
                              color: colors.darkBlue,
                              mb: 1,
                            }}
                          >
                            Lifting Range: {product.details.liftingRange}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: 500,
                              color: colors.darkBlue,
                              mb: 1,
                            }}
                          >
                            Load Capacity: {product.details.loadCapacity}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: 500,
                              color: colors.darkBlue,
                              mb: 1,
                            }}
                          >
                            Material: {product.details.material}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: 500,
                              color: colors.darkBlue,
                              mb: 1,
                            }}
                          >
                            Features:
                          </Typography>
                          <Box component="ul" sx={{ pl: 2, m: 0 }}>
                            {product.details.features.map((feature, idx) => (
                              <Typography
                                key={idx}
                                component="li"
                                variant="body2"
                                sx={{
                                  fontFamily: "Roboto, sans-serif",
                                  color: "#333",
                                  lineHeight: 1.6,
                                }}
                              >
                                {feature}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* Download Brochure Section */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1F2937",
              borderBottom: `1px solid ${colors.darkBlue}`,
              pb: 2,
              mt: { xs: 4, sm: 6, md: 8 },
              mb: 4,
              textAlign: "center",
            }}
          >
            Download Brochure
          </Typography>
          <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6, md: 8 } }}>
            <Button
              variant="contained"
              startIcon={<GetAppIcon />}
              onClick={handleOpenDownloadModal}
              sx={{
                backgroundColor: colors.darkBlue,
                color: "#fff",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                padding: { xs: "8px 16px", sm: "10px 24px" },
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: colors.lightBlue,
                },
              }}
            >
              Download Stands Brochure
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
                    Please enter your email and phone number to download the Stands brochure.
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
                      value="New Brochure Download Request - Stands"
                    />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for downloading the Stands brochure!"
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
                          "&:hover fieldset": { borderColor: colors.darkBlue },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.darkBlue,
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
                          "&:hover fieldset": { borderColor: colors.darkBlue },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.darkBlue,
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
        </Container>
      </Box>
    </Box>
  );
};

export default StandsPage;