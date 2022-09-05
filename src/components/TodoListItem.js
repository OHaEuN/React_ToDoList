import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
function TodoListItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;

  return (
    <ListItem>
      <div className={("checkbox", { checked })} onClick={() => onToggle(id)}>
        <Checkbox
          checked={checked}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <ListItemText id={id} primary={text} />
      <div className="remove" onClick={() => onRemove(id)}>
        <IconButton color="primary" aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </ListItem>
  );
}

export default TodoListItem;
