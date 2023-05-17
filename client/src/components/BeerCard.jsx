import { useState } from "react";
import {
  Typography,
  Button,
  Modal,
  Box,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DanMurphy from "../images/danmurphys-logo.png";
import BWS from "../images/bws-logo.png";
import Liquorland from "../images/liquorland-logo.png";

const BeerCard = ({ beer }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createRow = (title, value) => {
    return { title, value };
  };

  const boxStyling = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: { xs: 700, sm: 800, md: 900 },
    width: { xs: 350, sm: 400, md: 500 },
    maxHeight: "calc(100vh - 210px)",
    overflowY: "auto",
    bgcolor: "background.paper",
    borderRadius: "10px",
  };

  const rows = [
    createRow("Brand:", `${beer.brand.name}`),
    createRow("Origin:", `${beer.origin}`),
    createRow("State/City:", `${beer.state}`),
    createRow("Size:", `${beer.size}${beer.size_unit}`),
    createRow("Standard Drinks:", `${beer.standard_drinks}`),
    createRow("Alcohol Volume:", `${beer.alcohol_volume}`),
    createRow("Closure:", `${beer.closure}`),
    createRow("Beer Style:", `${beer.beer_style}`),
  ];

  return (
    <Grid container justifyContent="center">
      {beer.brand.image ? (
        <Grid item>
          <Button
            onClick={handleOpen}
            sx={{
              "&:hover": {
                background: "none",
              },
            }}
          >
            <Box sx={{ maxWidth: "400px" }}>
              <Box
                component="img"
                src={beer.brand.image}
                alt={beer.brand.name}
                sx={{
                  boxShadow: `0 2px 14px rgba(0,0,0,.1);`,
                  mb: "20px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Button>
        </Grid>
      ) : null}
      <Grid container>
        <Modal open={open} onClose={handleClose}>
          <Box sx={boxStyling}>
            <Grid
              container
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Grid item>
                <Typography
                  sx={{ pt: 1, fontWeight: 600 }}
                  variant="h4"
                  component="h1"
                >
                  {beer.brand.name}
                </Typography>
              </Grid>
              <Grid item sx={{ position: "absolute", right: 0, top: 0 }}>
                <Button onClick={handleClose}>
                  <CloseIcon sx={{ color: "black" }} />
                </Button>
              </Grid>
            </Grid>
            <Grid container item align="center">
              <Grid item xs>
                <Box
                  component="img"
                  src={beer.image}
                  alt="Beer Image"
                  width="200px"
                />
              </Grid>
            </Grid>
            {beer.variation ? (
              <Grid item xs={12} align="center">
                <Button>{beer.variation}</Button>
              </Grid>
            ) : null}
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Divider variant="middle" sx={{ border: "1px solid black" }} />
              <Typography sx={{ mt: 2 }} variant="h6">
                About this product:
              </Typography>
              <Typography sx={{ pl: 3, pr: 3 }} variant="body1">
                {beer.description}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", pl: 2, pr: 2 }}>
              <Typography
                sx={{ mt: 1, bgcolor: "#999", p: 1, borderRadius: 2 }}
                variant="h6"
              >
                Product Information
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell variant="head" sx={{ fontWeight: "800" }}>
                          {row.title}
                        </TableCell>
                        <TableCell align="center">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" sx={{ textAlign: "center", mt: 1 }}>
                Shop Now:
              </Typography>
              <Box
                justifyContent="center"
                display="flex"
                alignItems="flex-start"
              >
                {beer.retailers.dan_murphys ? (
                  <Button>
                    <a href={beer.retailers.dan_murphys} target="_blank">
                      <Box
                        component="img"
                        src={DanMurphy}
                        alt="Dan Murphys Logo"
                        maxWidth="50px"
                        sx={{ borderRadius: "4px" }}
                      />
                    </a>
                  </Button>
                ) : null}

                {beer.retailers.bws ? (
                  <Button>
                    <a href={beer.retailers.bws} target="_blank">
                      <Box
                        component="img"
                        src={BWS}
                        alt="BWS Logo"
                        maxWidth="50px"
                        sx={{ borderRadius: "4px" }}
                      />
                    </a>
                  </Button>
                ) : null}
                {beer.retailers.liquorland ? (
                  <Button>
                    <a href={beer.retailers.liquorland} target="_blank">
                      <Box
                        component="img"
                        src={Liquorland}
                        alt="Liquorland Logo"
                        maxWidth="50px"
                        sx={{ borderRadius: "4px" }}
                      />
                    </a>
                  </Button>
                ) : null}
              </Box>
            </Grid>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default BeerCard;
