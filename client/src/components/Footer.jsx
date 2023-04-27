import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#242424",
        paddingTop: 1,
        paddingBottom: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Link to="https://github.com/Dillind" target="_blank">
              <GitHubIcon fontSize="large" sx={{ color: "#fff" }} />
            </Link>
            <Link to="https://www.linkedin.com/in/dylan-lindsay/" target="_blank">
              <LinkedInIcon fontSize="large" color="primary" />
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#fff" variant="subtitle1">
              &copy; {`${new Date().getFullYear()} | All Rights Reserved`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
