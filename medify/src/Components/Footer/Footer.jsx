import { Box, Grid, useTheme, Button, Stack, Link } from "@mui/material";
import "./Footer.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const footerItems = {
  navLinks: [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointments",
    "Privicy Plolicy",
    "Onthology",
    "Nuerology",
    "Opthalmology",
    "Cardiology",
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
  ],
  socials: [
    "/assets/fb.png",
    "/assets/twitter.png",
    "/assets/yt.png",
    "/assets/pinterest.png",
  ],
};
const NavLink = ({ children }) => {
  return (
    <Link
      color="primary.contrastText"
      underline="none"
      to="#"
      className="navLinks"
      sx={{
        cursor: "pointer",
      }}
    >
      <Stack direction="row" gap="1rem">
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Link>
  );
};
export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: "auto",
        padding: "4rem",
        backgroundColor: theme.palette.secondary.main,
      }}
      component="footer"
    >
      <Grid container>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src="/assets/logo.png"
              height={41}
              width={138}
              marginBottom="0.5rem"
            />
            <Box
              sx={{
                marginBottom: "1rem",
              }}
            >
              {footerItems?.socials.map((item, index) => (
                <Button variant="transparent" type="button" size="small">
                  <img width={48} height={48} src={item} alt={"social-icon"} />
                </Button>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid container size={{ xs: 12, md: 9 }}>
          {footerItems?.navLinks.map((item, index) => {
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <NavLink>{item}</NavLink>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
