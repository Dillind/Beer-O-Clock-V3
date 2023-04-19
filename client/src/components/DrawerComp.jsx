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
import { Link } from "react-router-dom";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#242424",
            width: "100%",
            alignItems: "center",
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
              // sx={{ justifyContent: "center" }}
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
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
