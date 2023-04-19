import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        anchor="top"
        PaperProps={{
          sx: {
            backgroundColor: "#242424",
            alignItems: "center",
            top: "55px",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton
              LinkComponent={Link}
              to={`/${link === "home" ? "" : link}`}
              key={index}
              onClick={() => setOpen(!open)}
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "#fff" }}>
                  {link.toUpperCase()}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ ml: "auto", color: "#fff" }}
        onClick={() => setOpen(!open)}
      >
        {!open ? <MenuRoundedIcon /> : <CloseIcon />}
      </IconButton>
    </>
  );
};

export default DrawerComp;
