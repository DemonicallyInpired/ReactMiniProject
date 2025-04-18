import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import "./downloadApp.css";
import { Form } from "react-router-dom";
import AlternateBox from "../AlternateBox/AlternateBox";
export default function DownloadApp() {
  return (
    <AlternateBox sx={{ padding: "1rem 0rem" }}>
      <Grid sx={{ maxWidth: "80vw", margin: "auto" }} container spacing={2}>
        <Grid sx={{ textAlign: "center" }} size={{ xs: 12, md: 6 }}>
          <img
            width="90%"
            height="100%"
            src="/assets/mobile.jpg"
            alt="mobile-image"
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            position: "relative",
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.1rem",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h2" color="secondary">
              Download the{" "}
            </Typography>
            <Typography variant="h2" color="primary">
              Medify{" "}
            </Typography>
            <Typography variant="h2" color="secondary">
              App
            </Typography>
            <Typography component="span" fontWeight="bold">
              Get the link to download the app
            </Typography>
            <Box
              src={"/assets/down-arr.png"}
              component="img"
              width={{ xs: 32, md: 48 }}
              position="absolute"
              left={{ md: -20, xs: 0 }}
              top={50}
            />
          </Box>
          <Box sx={{ padding: "1rem", boxSizing: "border-box" }}>
            <Form>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <FormControl>
                  <TextField
                    displayEmpty
                    InputProps={{
                      id: "phoneNo",
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    placeholder="Enter the number"
                    type="number"
                    onChange={null}
                  />
                </FormControl>
                <Button type="button" variant="contained">
                  Send SMS
                </Button>
              </Box>
            </Form>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                marginTop: "1rem",
                justifyContent: { xs: "center", md: "flex-start" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Button
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={"/assets/playstore.png"} height={24} />}
                variant="contained"
                disableElevation
              >
                App Store
              </Button>

              <Button
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={"/assets/apple-logo.png"} height={24} />}
                variant="contained"
                disableElevation
              >
                App Store
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AlternateBox>
  );
}
