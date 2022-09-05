import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InputAdornment from "@mui/material/InputAdornment";
function TodoInput({ onInput }) {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    onInput(value);
    setValue("");
    event.preventDefault();
  };

  return (
    <form className="ToDoInput" onSubmit={onSubmit}>
      {/* <input
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
      /> */}

      <Box
        sx={{
          width: "95%",
          maxWidth: "100%",
          margin: "10px auto",
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          label="할 일을 입력하세요"
          variant="standard"
          onChange={onChange}
          value={value}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  aria-label="delete"
                  size="medium"
                  type="submit"
                >
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* <button type="submit">
          
        </button> */}
      </Box>
    </form>
  );
}

export default TodoInput;
