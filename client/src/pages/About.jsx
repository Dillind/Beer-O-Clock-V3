import { Grid, Typography, Box, Divider, Button } from "@mui/material";

import { Link } from "react-router-dom";

import BeerImage from "../images/beer-image-4.jpg";
const About = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
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
        <Grid item xs={12} md={12} sx={{ ml: 5, pt: "100px", pb: "100px" }}>
          <Typography
            sx={{
              color: "#fecc1a",
              borderBottom: "3px solid white",
              fontWeight: "800",
              width: 190,
            }}
            variant="h4"
            component="h1"
          >
            ABOUT US.
          </Typography>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "700",
                maxWidth: "50%",
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
            <Typography
              variant="body1"
              component="p"
              sx={{
                mt: 5,
                mb: 4,
                color: "#fff",
                fontWeight: "800",
                maxWidth: "50%",
              }}
            >
              Click the button below to get started!
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
