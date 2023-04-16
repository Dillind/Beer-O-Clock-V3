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
        console.log(value);
    }
  };

  useEffect(() => {
    country ? setBeerCardsVisible(true) : setBeerCardsVisible(false);
  });

  const beerCardContainer = {};

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ display: "grid", border: "5px solid lime" }}
      >
        <Grid item align="center" sx={{ border: "5px solid black" }}>
          <FormControl sx={{ width: 200 }} id="country-form">
            <InputLabel id="region-select-label">Country</InputLabel>
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
      <Grid container >
        <Grid item sx={{ border: "5px solid yellow" }}>
          {beerCardsVisible &&
            beers.map((beer) =>
              beer.origin === country ? (
                <BeerCard key={beer._id} beer={beer} />
              ) : null
            )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CountrySelector;
