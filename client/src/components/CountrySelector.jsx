import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import BeerCard from "./BeerCard";

const CountrySelector = ({ beers }) => {
  const [country, setCountry] = useState("");
  const [beerCardsVisible, setBeerCardsVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "country":
        setCountry(value);
    }
  };

  useEffect(() => {
    country ? setBeerCardsVisible(true) : setBeerCardsVisible(false);
  });

  return (
    <>
      <Grid container align="center">
        <Grid item xs={12} sx={{ pt: "50px", mb: 1 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "#242424", fontWeight: 800 }}
          >
            Select Country:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: "60px" }}>
          <FormControl sx={{ width: 200, bgcolor: "#fff", borderRadius: 1 }}>
            <InputLabel>Country</InputLabel>
            <Select
              name="country"
              value={country}
              label="Country"
              onChange={handleInputChange}
            >
              <MenuItem value="Australia" label="Australia">
                Australia
              </MenuItem>
              <MenuItem value="Japan" label="Japan">
                Japan
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        align="center"
        sx={{
          justifyContent: "center",
        }}
      >
        {beerCardsVisible &&
          beers.map((beer) =>
            beer.origin === country ? (
              <Grid item sx={{ mb: 1 }} key={beer._id}>
                <BeerCard key={beer._id} beer={beer} />
              </Grid>
            ) : null
          )}
      </Grid>
    </>
  );
};

export default CountrySelector;
