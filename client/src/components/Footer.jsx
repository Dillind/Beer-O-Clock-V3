import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#242424",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12} sx={{ mb: 1 }}>
              <Link to="https://github.com/Dillind">
                <GitHubIcon fontSize="large" sx={{ color: '#fff' }}/>
              </Link>
              <Link to="https://www.linkedin.com/in/dylan-lindsay/">
                <LinkedInIcon fontSize="large" color="primary"/>
              </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#fff" variant="subtitle1">
              &copy; {" "}{`${new Date().getFullYear()} | All Rights Reserved`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
