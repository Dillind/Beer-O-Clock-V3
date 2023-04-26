import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";

import DrawerComp from "./DrawerComp";
import SportsBarRoundedIcon from "@mui/icons-material/SportsBarRounded";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const links = ["home", "about", "beers"];
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#242424", height: "60px" }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <IconButton LinkComponent={Link} to="/">
              <SportsBarRoundedIcon sx={{ color: "#fecc1a" }} />
              <Typography
                variant="h5"
                component="h1"
                sx={{ ml: 1, color: "#fff", fontWeight: "800" }}
              >
                BEER-O-CLOCK
              </Typography>
            </IconButton>
            <DrawerComp links={links} />
          </>
        ) : (
          <Grid container sx={{ placeItems: "center", height: "80px" }}>
            <Grid container item xs={6}>
              <IconButton LinkComponent={Link} to="/">
                <SportsBarRoundedIcon sx={{ color: "#fecc1a" }} />
                <Typography
                  variant="h5"
                  component="h1"
                  sx={{
                    ml: 1,
                    color: "#fff",
                    fontWeight: "800",
                    mt: { md: 0.5 },
                  }}
                >
                  BEER-O-CLOCK
                </Typography>
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
                sx={{ float: "right" }}
              >
                {links.map((link, index) => (
                  <Tab
                    LinkComponent={Link}
                    to={`/${link === "home" ? "" : link}`}
                    key={index}
                    label={link}
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
