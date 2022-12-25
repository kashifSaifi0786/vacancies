import * as React from "react";
import { vacancyRemove } from "../../store/vacancies";
import { useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, ListItemIcon, ListItemText } from "@mui/material";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Dots({ id }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    dispatch(vacancyRemove({ id }));
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={`/form/${id}`}>
          <MenuItem>
            <ListItemIcon>
              <Edit fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <ListItemText>delete</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
