import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { AddItemModal } from "./AddItemModal";
import { SingleColumn } from "./SingleColumn";


export const AllInOneContainer = () => {
  const [Cards, setCards] = useState([
    { id: 0, description: "", status: "", dueDate: "" },
  ]);

  type singleCard = {
    id: number;
    description: string;
    status: string;
    dueDate: string;
  };
  var SingleCard: singleCard;

  const updateStatusNew = (id) => {
    for (const x in Cards) {
      if (Cards[x].id === id) {
        if (Cards[x].status === "todo") {
          Cards[x].status = "inProgress";
          updateTodo(Cards[x]);
          break;
        }
      }
    }
    setCards([...Cards]);
  };

  const updateStatusPro = (id) => {
    for (const x in Cards) {
      if (Cards[x].id === id) {
        if (Cards[x].status === "inProgress") {
          Cards[x].status = "completed";
          updateTodo(Cards[x]);
          break;
        }
      }
    }
    setCards([...Cards]);
  };
  const reverseStatusPro = (id) => {
    for (const x in Cards) {
      if (Cards[x].id === id) {
        if (Cards[x].status === "inProgress") {
          Cards[x].status = "todo";
          updateTodo(Cards[x]);
          break;
        }
      }
    }
    setCards([...Cards]);
  };
  const reverseStatusFin = (id) => {
    for (const x in Cards) {
      if (Cards[x].id === id) {
        if (Cards[x].status === "completed") {
          Cards[x].status = "inProgress";
          updateTodo(Cards[x]);
          break;
        }
      }
    }
    setCards([...Cards]);
  };

  // ---------------------
  const handleOpen = () => {
    setOpen(true);
    setDate(nowDate);
  };
  const handleClose = () => {
    setText("");
    setOpen(false);
  };
  const handleCloseOk = () => {
    SingleCard = {
      id: Date.now(),
      description: text,
      status: "todo",
      dueDate: date,
    };
    setTodo(SingleCard);
    if (text) setCards([...Cards, SingleCard]);
    setText("");

    setDate("");
    setOpen(false);
  };

  // ---------------------
  const handleOpenEdit = (id) => {
    for (const x of Cards) {
      if (x.id === id) {
        setText(x.description);
        setDate(x.dueDate.slice(0, 10));
        setIdEdit(x.id);
        setStatusEdit(x.status);
        break;
      }
    }
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setText("");
    setOpenEdit(false);
  };

  const handleCloseOkEdit = () => {
    for (const x in Cards) {
      if (Cards[x].id === idEdit) {
        Cards[x].description = text;
        Cards[x].dueDate = date;
        break;
      }
    }
    SingleCard = {
      id: idEdit,
      description: text,
      status: statusEdit,
      dueDate: date,
    };

    if (text) {
      setCards([...Cards]);
      updateTodo(SingleCard);
    }
    setText("");
    setDate("");
    setOpenEdit(false);
  };

  const handleRemoveCard = (id) => {
    setCards(Cards.filter((myitem) => myitem.id !== id));
    removeTodo(id);
  };

  const handleMoveLeft = (status, id) => {
    return status === "inProgress"
      ? reverseStatusPro(id)
      : status === "completed"
      ? reverseStatusFin(id)
      : true;
  };
  const handleMoveRight = (status, id) => {
    return status === "todo"
      ? updateStatusNew(id)
      : status === "inProgress"
      ? updateStatusPro(id)
      : true;
  };
  // ---------------------

  //Axios get Cards from server------------------
  const todosApi = axios.create({
    baseURL: "http://52.213.105.232:3500/main/",
  });

  async function getTodoList() {
    try {
      const response = await todosApi.get("/getTodos");
      response.data.todos.sort(
        (a: { id: number }, b: { id: number }) => a.id - b.id //Sort by date
      );
      setCards(response.data.todos);
    } catch (e) {
      console.log(e);
    }
  }

  async function setTodo(todo) {
    try {
      await todosApi.post("/setTodo", todo);
    } catch (e) {
      console.log(e);
    }
  }

  async function updateTodo(todo) {
    try {
      await todosApi.post("/updateTodo", todo);
    } catch (e) {
      console.log(e);
    }
  }

  async function removeTodo(id) {
    try {
      await todosApi.post("/removeTodo", { id });
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Axios get Cards from server------------------

  //Text----------------------
  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  //Text----------------------



  //DOM----------------------
  // useEffect(() => {
  //   console.log("Use effect Parent");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const updateCards = (cards) => {
    setCards([...cards]);
    console.log(cards);
  };
  return (
    <Container maxWidth="md" component="main">
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Planning App
      </Typography>
      {/* //Modal---------------------- */}

      <AddItemModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
        text={text}
        handleChangeText={handleChangeText}
        handleChangeDate={handleChangeDate}
        date={date}
        handleCloseOk={handleCloseOk}

      />
      {/* //Modal---------------------- */}
      <Grid container justify="center" spacing={2}>
        {/* New status Column */}

        <SingleColumn
          Cards={Cards}
          handleOpenEdit={handleOpenEdit}
          openEdit={openEdit}
          handleClose={handleClose}
          text={text}
          date={date}
          handleChangeText={handleChangeText}
          handleChangeDate={handleChangeDate}
          handleCloseOkEdit={handleCloseOkEdit}
          handleCloseEdit={handleCloseEdit}
          handleRemoveCard={handleRemoveCard}
          updateStatusNew={updateStatusNew}
          status="todo"
          handleMoveLeft={handleMoveLeft}
          handleMoveRight={handleMoveRight}
        />

        {/* In Progress Column */}
        <SingleColumn
          Cards={Cards}
          handleOpenEdit={handleOpenEdit}
          openEdit={openEdit}
          handleClose={handleClose}
          text={text}
          date={date}
          handleChangeText={handleChangeText}
          handleChangeDate={handleChangeDate}
          handleCloseOkEdit={handleCloseOkEdit}
          handleCloseEdit={handleCloseEdit}
          handleRemoveCard={handleRemoveCard}
          updateStatusNew={updateStatusNew}
          status="inProgress"
          handleMoveLeft={handleMoveLeft}
          handleMoveRight={handleMoveRight}
        />

        {/* Finished column */}
        <SingleColumn
          Cards={Cards}
          handleOpenEdit={handleOpenEdit}
          openEdit={openEdit}
          handleClose={handleClose}
          text={text}
          date={date}
          handleChangeText={handleChangeText}
          handleChangeDate={handleChangeDate}
          handleCloseOkEdit={handleCloseOkEdit}
          handleCloseEdit={handleCloseEdit}
          handleRemoveCard={handleRemoveCard}
          updateStatusNew={updateStatusNew}
          status="completed"
          handleMoveLeft={handleMoveLeft}
          handleMoveRight={handleMoveRight}

        
        />
      </Grid>
    </Container>
  );
};
