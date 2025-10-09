import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  CircularProgress,
  Grid,
} from "@mui/material";
import contactImg from "../../Assets/Home/contact.jpg";
import colors from "../../theme/colors";
const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true, error: null });

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); // convert to JSON

    try {
      const response = await fetch(
        "https://api.cynkco.com/api/contact/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setFormStatus({ submitted: true, loading: false, error: null });
        e.target.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setFormStatus({
        ...formStatus,
        loading: false,
        error:
          "An error occurred while submitting your request. Please try again.",
      });
    }
  };

  return (
    <Box
      sx={{
        background: colors.blue,
        py: 6,
        px: { xs: 2, md: 10 },
        fontFamily: "Roboto, sans-serif",
        minHeight: "60vh",
      }}
    >
      <Grid container spacing={0}>
        {/* Image Section (Left) */}
        <Grid item size={{ sm: 12, md: 4, lg: 6 }}>
          <Box
            component="img"
            src={contactImg}
            alt="Contact"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maxHeight: "800px",
            }}
          />
        </Grid>

        {/* Form Section (Right) */}
        <Grid item size={{ sm: 12, md: 8, lg: 6 }}>
          <Paper
            sx={{
              maxWidth: 900,
              mx: "auto",
              p: { xs: 2, md: 5 },
              bgcolor: "#FFFFFF",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                textAlign: "center",
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.125rem" },
                background: `linear-gradient(45deg, ${colors.gradientStart} 0%, ${colors.darkBlue} 100%)`, // Use colors from colors.js
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Our Team
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "#757575",
                mb: 4,
                maxWidth: 600,
                mx: "auto",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Please complete the form below to discuss your business needs with
              one of our experts.
            </Typography>

            {formStatus.submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your submission. Our team will contact you
                shortly.
              </Alert>
            )}
            {formStatus.error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {formStatus.error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission"
              />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Name Fields */}
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  {["First Name", "Last Name"].map((label, i) => (
                    <TextField
                      key={label}
                      name={label.toLowerCase().replace(" ", "_")}
                      label={label}
                      required
                      fullWidth
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      InputLabelProps={{ shrink: true }}
                      sx={{
                        flex: 1,
                        minWidth: "200px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: colors.darkBlue },
                          "&:hover fieldset": { borderColor: colors.lightBlue },
                          "&.Mui-focused fieldset": {
                            borderColor: colors.lightBlue,
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontFamily: "Roboto, sans-serif",
                          color: "#757575",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: colors.lightBlue,
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* Email and Phone */}
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    required
                    fullWidth
                    placeholder="name@company.com"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      flex: 1,
                      minWidth: "200px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: colors.darkBlue },
                        "&:hover fieldset": { borderColor: colors.lightBlue },
                        "&.Mui-focused fieldset": {
                          borderColor: colors.lightBlue,
                        },
                      },
                      "& .MuiInputLabel-root": { color: "#757575" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: colors.lightBlue,
                      },
                    }}
                  />
                  <TextField
                    name="phone"
                    label="Phone Number"
                    required
                    fullWidth
                    placeholder="+1 (555) 123-4567"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      flex: 1,
                      minWidth: "200px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: colors.darkBlue },
                        "&:hover fieldset": { borderColor: colors.lightBlue },
                        "&.Mui-focused fieldset": {
                          borderColor: colors.lightBlue,
                        },
                      },
                      "& .MuiInputLabel-root": { color: "#757575" },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: colors.lightBlue,
                      },
                    }}
                  />
                </Box>

                {/* Message */}
                <TextField
                  name="message"
                  label="Your Message"
                  multiline
                  rows={6}
                  fullWidth
                  required
                  placeholder="Let us know how we can help..."
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
                      color: colors.lightBlue,
                    },
                  }}
                />

                {/* Submit */}
                <Box sx={{ textAlign: "center", mt: 2 }}>
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
                      "Submit Inquiry"
                    )}
                  </Button>
                </Box>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
