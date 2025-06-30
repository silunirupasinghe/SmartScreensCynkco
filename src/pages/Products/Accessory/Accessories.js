import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GetAppIcon from "@mui/icons-material/GetApp";
import colors from "../../../theme/colors";

// Assets
import CT011 from "../../../Assets/Products/Accessories/pen.png";
import CT16A from "../../../Assets/Products/Accessories/SharableDongal.png";
import CT20 from "../../../Assets/Products/Accessories/speakers.png";
import ops from "../../../Assets/Products/Accessories/ops.png";
import AccessoryHero from "./AccessoryHero";

// Styled Card
const AccessoryCard = styled(Box)(() => ({
  maxWidth: 380,
  borderRadius: 16,
  backgroundColor: "#fff",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
  overflow: "hidden",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

// Accessory List
const accessories = [
  {
    name: "CT-011 Laser Pen",
    image: CT011,
    description:
      "The CT-011 Laser Pen enables annotation, navigation, and whiteboard control with 20m range and 8–12 hrs battery life.",
    brochurePath: "/brochures/pen_brochure.pdf",
  },
  {
    name: "CT-16A Screen Transmitter",
    image: CT16A,
    description:
      "The CT-16A supports 2560x1440@25Hz wireless screen sharing with Bluetooth 5.2, Wi-Fi 802.11ax, and low-latency return.",
    brochurePath: "/brochures/screen_transmitter_brochure.pdf",
  },
  {
    name: "CT-20 External Mic",
    image: CT20,
    description:
      "The CT-20 Mic delivers crisp sound using an 8-microphone array, noise suppression, and Zoom/Teams compatibility.",
    brochurePath: "/brochures/wirless_mic_brochure.pdf",
  },
  {
    name: "OPS-994K",
    image: ops,
    description:
      "OPS-994K is a powerful modular computing solution with support for 6th–8th Gen Intel CPUs, 4K display output, rich I/O ports, and compatibility with Windows and Linux OS. Ideal for high-end smart displays and interactive panels.",
    brochurePath: "/brochures/ops_brochure.pdf",
  },
];

const AccessoriesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
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
    if (formStatus.submitted && activeProduct?.brochurePath) {
      const timer = setTimeout(() => {
        const link = document.createElement("a");
        link.href = activeProduct.brochurePath;
        link.download = `${activeProduct.name}-Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        handleCloseModal();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [formStatus.submitted, activeProduct]);

  const handleOpenModal = (product) => {
    setActiveProduct(product);
    setFormStatus({ submitted: false, loading: false, error: null });
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveProduct(null);
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
    setFormStatus({ submitted: false, loading: false, error: null });
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
    if (!regex.test(phone)) return setPhoneError("Invalid phone"), false;
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
      <AccessoryHero />
      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            sx={{ mb: 6, color: colors.darkBlue }}
          >
            Accessories Collection
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {accessories.map((product, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Fade in timeout={1000 + index * 200}>
                  <AccessoryCard>
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        height: 220,
                        objectFit: "contain",
                        background: "#f9f9f9",
                        borderBottom: `1px solid ${colors.lightBlue}`,
                      }}
                    />
                    <Box p={3}>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        color={colors.darkBlue}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1.2, color: "#444", minHeight: 80 }}
                      >
                        {product.description}
                      </Typography>
                      <Box mt={3} textAlign="center">
                        <Button
                          variant="contained"
                          onClick={() => handleOpenModal(product)}
                          startIcon={<GetAppIcon />}
                          sx={{
                            backgroundColor: colors.darkBlue,
                            color: "#fff",
                            fontWeight: 600,
                            textTransform: "none",
                            px: 3,
                            py: 1,
                            borderRadius: "8px",
                            "&:hover": {
                              backgroundColor: colors.lightBlue,
                            },
                          }}
                        >
                          Download Brochure
                        </Button>
                      </Box>
                    </Box>
                  </AccessoryCard>
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* Modal */}
          <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle> Brochure Download</DialogTitle>
            <DialogContent>
              {!formStatus.submitted ? (
                <form
                  action="https://formsubmit.co/info@cynkco.com" // Replace this with your FormSubmit ID
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
                    Please enter your email and phone number to download the {}
                    {activeProduct?.name} brochure.
                  </Typography>
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value={`Brochure Request - ${activeProduct?.name}`}
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
                        px: 4,
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
                <Alert severity="success" sx={{ mt: 2 }}>
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

export default AccessoriesPage;
