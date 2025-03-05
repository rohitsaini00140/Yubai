import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/system";
import emailjs from "emailjs-com";
import {
  Autocomplete,
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    requirement: "",
    message: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle phone number change
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, mobile: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.mobile.length < 5) {
      alert("Please enter  phone number.");
      return;
    }

    

    // Send email via EmailJS
    emailjs
      .send(
        "service_4vsek7k", // Your Service ID
        "template_s8q8pxf", // Correct Template ID from the EmailJS dashboard
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          requirement: formData.requirement,
          message: formData.message,
        },
        "gbgxL1Q9FqWmhnjot" // Your Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Message sent successfully!");

          // Reset form data
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            requirement: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send the message. Please try again.");
        }
      )
      .catch((error) => {
        console.error("Network or email service error:", error);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <Stack component={"div"}>

      <Box sx={{ padding: {xs:"1rem",sm:"1rem 10rem"}, maxWidth: "100%", margin: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Card elevation={2} sx={{ padding: "2rem" }}>
            <Grid container spacing={4}>
              {/* Left Section */}

              <Grid item size={{ xs: 12, md: 12}}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2,textAlign:'left' }}>
                  CONTACT US
                </Typography>
                <Grid container spacing={2}>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <PhoneInput
                      country={"ae"} // Default country UAE
                      value={formData.mobile}
                      onChange={handlePhoneChange}
                      inputProps={{ name: "mobile", required: true }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{
                        width: "100%",
                        height: "56px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        paddingLeft: "48px",
                      }}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <Autocomplete
                      value={formData.requirement}
                      onChange={(event, newValue) =>
                        handleChange(event, newValue)
                      }
                      options={[
                        "General Inquiry",
                        "Logistics Support",
                        "Others",
                      ]}
                      renderInput={(params) => (
                        <TextField {...params} label="Requirement"/>
                      )}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message here..."
                      multiline
                      rows={1}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item size={{ xs: 12, sm: 5 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="warning"
                      type="submit"
                      size="large"
                      sx={{ background: "#ce352f" }}
                    >
                      Send Your Message
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </form>
      </Box>

    </Stack>
  );
}

export default Contact;
