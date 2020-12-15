import React from "react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InputIcon from "@material-ui/icons/Input";
import Box from "@material-ui/core/Box";

export default function CardButtons() {
  return (
    <div>
      <Box component="span" m={1}>
        <Fab size="small" color="primary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Box>
      <Box component="span" m={1}>
        <Fab size="small" color="secondary" aria-label="edit">
          <DeleteIcon />
        </Fab>
      </Box>
      <Box component="span" m={1}>
        <Fab size="small" color="default" aria-label="edit">
          <InputIcon />
        </Fab>
      </Box>
    </div>
  );
}
