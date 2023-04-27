import { Grid, Typography, Button, Box } from "@mui/material";
import BackgroundBeer from "../images/beer-bg-sm.jpg";
import BeerFriends from "../images/beer-image-5.jpg";
import CountryGlobe from "../images/beer-image-1.jpg";
import BeerSelection from "../images/beer-image-2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{ bgcolor: "#FBFBFB", minHeight: "100vh" }}
    >
      <Grid
        container
        item
        xs={6}
        sx={{
          background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${BackgroundBeer})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <Grid item align="center" xs={12} sx={{ p: 1 }}>
          <Typography
            sx={{
              color: "#fecc1a",
              fontWeight: "800",
              mb: 3,
            }}
            variant="h3"
            component="h1"
          >
            WELCOME.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "700",
              mb: 8,
            }}
            variant="h5"
            component="p"
          >
            Discover your favourite beers from all over the world.
          </Typography>
          <Button
            LinkComponent={Link}
            to="/beers"
            sx={{
              bgcolor: "#fecc1a",
              color: "#242424",
              fontWeight: "800",
              "&:hover": {
                bgcolor: "#fecc1a",
                transform: "scale(1.05)",
                transition: "all 0.5s ease-in-out",
              },
              p: 1.5,
              fontSize: "16px",
            }}
          >
            GET STARTED
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={8}
        xs={6}
        sx={{
          textAlign: "center",
          alignItems: "center",
          minHeight: "60vh",
          p: "30px",
        }}
      >
        <Grid item xs={12} md={4} align="center">
          <Box sx={{ textAlign: "center", maxWidth: "350px" }}>
            <Box
              component="img"
              src={CountryGlobe}
              sx={{
                boxShadow: `0 2px 14px rgba(0,0,0,.5);`,
                width: "100%",
                mb: "20px",
              }}
            />
            <Typography
              variant="h5"
              component="h4"
              sx={{ color: "#242424", fontWeight: "800" }}
            >
              Select your country
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <Box sx={{ textAlign: "center", maxWidth: "350px" }}>
            <Box
              component="img"
              src={BeerSelection}
              sx={{
                boxShadow: `0 2px 14px rgba(0,0,0,.3);`,
                width: "100%",
                mb: "20px",
              }}
            />
            <Typography
              variant="h5"
              component="h4"
              sx={{ color: "#242424", fontWeight: "800" }}
            >
              Find a beer
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <Box sx={{ textAlign: "center", maxWidth: "350px" }}>
            <Box
              component="img"
              src={BeerFriends}
              sx={{
                boxShadow: `0 2px 14px rgba(0,0,0,.3);`,
                width: "100%",
                mb: "20px",
              }}
            />
            <Typography
              variant="h5"
              component="h4"
              sx={{ color: "#242424", fontWeight: "800" }}
            >
              Enjoy!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
