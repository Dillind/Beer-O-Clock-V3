import { Grid, Typography, Box, Divider, Button } from "@mui/material";

import { Link } from "react-router-dom";

import BeerImage from "../images/beer-image-4.jpg";
const About = () => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid
        container
        item
        direction="column"
        sx={{
          backgroundImage: `url(${BeerImage})`,
          backgroundRepeat: "no repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // backgroundAttachment: 'fixed'
        }}
      >
        <Grid item xs={12} sx={{ ml: 5, pt: "100px", pb: "100px" }}>
          <Typography
            sx={{
              color: "#fecc1a",
              borderBottom: "3px solid white",
              fontWeight: "800",
              width: 200,
              fontSize: "35px",
            }}
            variant="h4"
            component="h1"
          >
            ABOUT US.
          </Typography>
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "700",
                maxWidth: "50%",
                fontSize: { xs: "16px", md: "20px" },
              }}
              variant="body1"
              component="p"
            >
              At Beer-O-Clock, we are passionate about all things beer. We
              believe that everyone deserves to find their perfect pint, and we
              are here to help you do just that. Whether you're a beer
              connoisseur or just starting out, we've got you covered.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              LinkComponent={Link}
              to="/beers"
              sx={{
                bgcolor: "#fecc1a",
                color: "#242424",
                fontWeight: "800",
                p: 1,
                "&:hover": {
                  bgcolor: "#fecc1a",
                  transform: "scale(1.05)",
                  transition: "all 0.5s ease-in-out",
                },
              }}
            >
              GET STARTED
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
