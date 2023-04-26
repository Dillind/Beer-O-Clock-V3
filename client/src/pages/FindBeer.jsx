import { useState, useEffect } from "react";
import CountrySelector from "../components/CountrySelector";
import { Grid } from "@mui/material";

const FindBeer = () => {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch("http://localhost:4000/beers");
      const json = await response.json();

      if (response.ok) {
        setBeers(json);
      }
    };

    fetchBeers();
  }, []);

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs={12}>
        <CountrySelector beers={beers} />
      </Grid>
    </Grid>
  );
};

export default FindBeer;
