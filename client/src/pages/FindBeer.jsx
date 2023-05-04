import { useState, useEffect } from "react";
import CountrySelector from "../components/CountrySelector";
import { Grid, Typography } from "@mui/material";
import SportsBarRoundedIcon from "@mui/icons-material/SportsBarRounded";
import { keyframes } from "@mui/system";

const FindBeer = () => {
  const [beers, setBeers] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBeers = async () => {
    try {
      const response = await fetch(
        "https://beerapi-backend-dillind.onrender.com/beers"
        // "http://localhost:4000/beers"
      );
      const json = await response.json();
      if (response.ok) {
        setBeers(json);
      }
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  const spin = keyframes`from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }`;

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {loading ? (
        <Grid item xs={12}>
          <CountrySelector beers={beers} loading={loading} />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
            <SportsBarRoundedIcon
              sx={{
                color: "#fecc1a",
                pt: 1,
                animation: `${spin} 2s infinite ease`,
              }}
              fontSize="large"
            />
            Brewing data...
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default FindBeer;
