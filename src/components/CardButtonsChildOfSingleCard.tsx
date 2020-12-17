import React from "react";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import InputIcon from "@material-ui/icons/Input";
import Box from "@material-ui/core/Box";
import AddEditDialog from "./AddEditDialog";

// DeleteSingleCard function sent id to parent to know what delete
// id variable to receive from parent id of pressed button card
// EditSingleCard function send to parent
//textFromParent var initial value when edit text
//updateCard function send text and date to parent to update this card
export default function CardButtonsChildOfSingleCard({
  DeleteSingleCard,
  id,
  EditSingleCard,
  textFromParent,
  updateCard,
  sendId,
}) {
  const DeleteCard = () => {
    DeleteSingleCard(id);
  };
  const EditCard = () => {
    EditSingleCard(id);
  };

  return (
    <div>
      <Box component="span" m={1}>
        <Fab size="small" aria-label="edit" onClick={EditCard} id={id}>
          <AddEditDialog
            addCard={updateCard}
            addNew={false}
            textFromParent={textFromParent}
            sendId={sendId}
            receiveId={id}
          />
        </Fab>
      </Box>
      <Box component="span" m={1}>
        <Fab
          size="small"
          color="secondary"
          aria-label="edit"
          onClick={DeleteCard}
          id={id}
        >
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
