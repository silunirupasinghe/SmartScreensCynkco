import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";
import ScreenHero from "../Screens/ScreenHero.js";
import { Link } from "react-router-dom";
import colors from "../../../theme/colors";
import GetAppIcon from "@mui/icons-material/GetApp";

import "@fontsource/poppins/700.css";
import "@fontsource/roboto/400.css";

// Images
import CTSC65A from "../../../Assets/Products/Screens/CT-SC65A.png";
import CTSC65WC from "../../../Assets/Products/Screens/CTSC65WC/CT-SC65WC.png";
import CTSC75WC from "../../../Assets/Products/Screens/CTSC75WC/CT-SC75WC.png";
import CTSC75A from "../../../Assets/Products/Screens/CTSC75A/CTSC75A.png";
import CTSC86WC from "../../../Assets/Products/Screens/CT-SC86WC.png";
import CTSC85A from "../../../Assets/Products/Screens/CT-SC85A.png";

const ProductCard = styled(Card)(({ theme }) => ({
  height: 450,
  margin: "auto",
  borderRadius: 5,
  transition: "transform 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

const collections = [
  {
    name: "Single System without Camera",
    products: [
      {
        name: "CT-SC65A",
        image: CTSC65A,
        description:
          "A 65-inch 4K Ultra HD SmartScreen with high-precision touch and wireless screen sharing, great for interactive presentations.",
        url: "/products/smart-screens/ct-sc65a",
      },
      {
        name: "CT-SC75A",
        image: CTSC75A,
        description:
          "A 75-inch 4K Ultra HD display with dual-pen writing and wireless screen transfer, ideal for team brainstorming.",
        url: "/products/smart-screens/ct-sc75a",
      },
      {
        name: "CT-SC85A",
        image: CTSC85A,
        description:
          "An 86-inch 4K Ultra HD SmartScreen with precise touch and wireless sharing, perfect for interactive meeting spaces.",
        url: "/products/smart-screens/ct-sc85a",
      },
    ],
  },
  {
    name: "Dual System with Camera",
    products: [
      {
        name: "CT-SC65WC",
        image: CTSC65WC,
        description:
          "A 65-inch 4K Ultra HD SmartScreen with a 48MP camera and 8-array mic, ideal for video conferencing and collaborative work.",
        url: "/products/smart-screens/ct-sc65wc",
      },
      {
        name: "CT-SC75WC",
        image: CTSC75WC,
        description:
          "A 75-inch 4K Ultra HD display with a 48MP camera and dual-pen writing, perfect for virtual meetings and team collaboration.",
        url: "/products/smart-screens/ct-sc75wc",
      },
      {
        name: "CT-SC86WC",
        image: CTSC86WC,
        description:
          "An 86-inch 4K Ultra HD display with a 48MP camera and high-precision touch, suited for large-scale video conferencing.",
        url: "/products/smart-screens/ct-sc86wc",
      },
    ],
  },
];

const ScreensPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
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
        link.href = "/brochures/smart_board_broucher.pdf"; // Update with your path
        link.download = "Screens_Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        handleCloseModal();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formStatus.submitted]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenModal = () => {
    setFormStatus({ submitted: false, loading: false, error: null });
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return setEmailError("Email is required"), false;
    if (!regex.test(email)) return setEmailError("Invalid email"), false;
    return true;
  };

  const validatePhone = () => {
    const regex = /^\+?[\d\s-]{10,}$/;
    if (!phone) return setPhoneError("Phone is required"), false;
    if (!regex.test(phone)) return setPhoneError("Invalid phone number"), false;
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail() || !validatePhone()) return;

    setFormStatus({ submitted: false, loading: true, error: null });

    try {
      const form = e.target;
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus({ submitted: true, loading: false, error: null });
      } else {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }
    } catch (err) {
      setFormStatus({ submitted: false, loading: false, error: err.message });
    }
  };

  return (
    <Box>
      <ScreenHero />

      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          pb: { md: 6, xs: 4 },
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered={!isMobile}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: { xs: 3, sm: 4, md: 6 },
              "& .MuiTab-root": {
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.1rem" },
                color: colors.darkBlue,
                textTransform: "none",
                px: { xs: 1, sm: 1, md: 4 },
                minWidth: { xs: 100, sm: 160, md: 200 },
              },
              "& .Mui-selected": { color: colors.lightBlue },
              "& .MuiTabs-indicator": { backgroundColor: colors.lightBlue },
              "& .MuiTabs-scrollButtons": {
                color: colors.darkBlue,
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
          >
            {collections.map((collection, index) => (
              <Tab key={index} label={collection.name} />
            ))}
          </Tabs>

          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              color: colors.darkBlue,
              textAlign: "center",
              mb: 4,
            }}
          >
            {collections[activeTab].name}
          </Typography>

          <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
            {collections[activeTab].products.map((screen, index) => (
              <Grid item xs={12} sm={6} md={4} key={screen.name}>
                <Fade in timeout={1000 + index * 200}>
                  <ProductCard sx={{ width: isMobile ? 290 : 350 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={screen.image}
                      alt={screen.name}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 700,
                          color: colors.darkBlue,
                          mb: 1.5,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {screen.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Roboto, sans-serif",
                          fontWeight: 400,
                          color: "#333",
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      >
                        {screen.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                      <Button
                        variant="contained"
                        component={Link}
                        to={screen.url}
                        sx={{
                          backgroundColor: colors.darkBlue,
                          color: "#fff",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "bold",
                          textTransform: "none",
                          px: 3,
                          py: 1,
                          borderRadius: "8px",
                          "&:hover": { backgroundColor: colors.lightBlue },
                        }}
                      >
                        More
                      </Button>
                    </CardActions>
                  </ProductCard>
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* Common Download Brochure Section */}
          <Box textAlign="center" mt={10}>
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
              sx={{
                borderBottom: `1px solid ${colors.darkBlue}`,
                pb: 2,
                mt: { xs: 4, sm: 6, md: 8 },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Download Brochure
            </Typography>
            <Button
              variant="contained"
              startIcon={<GetAppIcon />}
              onClick={handleOpenModal}
              sx={{
                backgroundColor: colors.darkBlue,
                color: "#fff",
                fontWeight: 600,
                px: 4,
                py: 1.2,
                mt: { xs: 2, sm: 4, md: 4 },
                borderRadius: "10px",
                textTransform: "none",
                "&:hover": { backgroundColor: colors.lightBlue },
              }}
            >
              Download Brochure
            </Button>
          </Box>

          {/* Modal */}
          <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Screens Brochure Download</DialogTitle>
            <DialogContent>
              {!formStatus.submitted ? (
                <form
                  action="https://formsubmit.co/info@cynkco.com" // 🔁 Replace with your real formsubmit ID
                  method="POST"
                  onSubmit={handleFormSubmit}
                >
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
                    screens brochure.
                  </Typography>
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Screens Brochure Request"
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    error={!!emailError}
                    helperText={emailError}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setPhoneError("");
                    }}
                    error={!!phoneError}
                    helperText={phoneError}
                    margin="normal"
                    required
                  />
                  {formStatus.error && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                      {formStatus.error}
                    </Alert>
                  )}
                  <Box textAlign="center" mt={3}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={formStatus.loading}
                      sx={{
                        px: 5,
                        py: 1.3,
                        fontWeight: 600,
                        fontSize: "1rem",
                        background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                        textTransform: "none",
                        "&:hover": {
                          background: `linear-gradient(45deg, ${colors.lightBlue}, ${colors.darkBlue})`,
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
              ) : (
                <Alert severity="success" sx={{ mt: 3 }}>
                  Thank you! Your download will start shortly.
                </Alert>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </Box>
  );
};

export default ScreensPage;
