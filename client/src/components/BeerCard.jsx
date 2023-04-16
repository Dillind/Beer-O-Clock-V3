import { useEffect, useState } from "react";
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
  TableHead,
  TableRow,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

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

  const buttonStyling = {
    "&:hover": {
      background: "none",
    },
  };

  const boxStyling = {
    position: "fixed",
    top: "52%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: { xs: 500, md: 650, lg: 980 },
    width: { xs: 300, md: 400, lg: 500 },
    maxHeight: "calc(100vh - 210px)",
    overflowY: "auto",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: "10px",
    // boxShadow: 24,
    p: 4,
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
    <Grid container>
      <Grid item>
        {beer.brand.image ? (
          <Card>
            <Button sx={buttonStyling} variant="text" onClick={handleOpen}>
              <CardMedia
                component="img"
                height="200"
                image={beer.brand.image}
                alt={beer.brand.name}
              />
            </Button>
          </Card>
        ) : null}
      </Grid>
      <Grid container spacing={1}>
        <Modal open={open} onClose={handleClose}>
          <Box sx={boxStyling}>
            <Grid container>
              <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
                <Typography variant="h4">{beer.brand.name}</Typography>
              </Grid>
              <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
                <Typography>
                  <img src={beer.image} alt="Beer Image" width={150} />
                </Typography>
                {beer.variation ? <Button>{beer.variation}</Button> : null}
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
              <Divider variant="middle" sx={{ border: "1px solid black" }} />
              <Typography sx={{ mt: 2 }} variant="h6">
                About this product:
              </Typography>
              <Typography variant="body1">{beer.description}</Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
              <Typography sx={{ mt: 1, bgcolor: "#999", p: 1 }} variant="h6">
                Product Information
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell variant="head" sx={{ fontWeight: "bold" }}>
                          {row.title}
                        </TableCell>
                        <TableCell align="center">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default BeerCard;
