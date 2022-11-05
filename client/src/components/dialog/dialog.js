import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    ID: props.id,
    NOME: props.title,
    DESCRICAO: props.descricao,
    ESTADO: props.estado
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditGame = () => {
    Axios.put("http://localhost:3001/edit", {
      ID: editValues.ID,
      NOME: editValues.NOME,
      DESCRICAO: editValues.DESCRICAO,
      ESTADO: editValues.ESTADO
    }).then(() => {
      props.setlistSessao(
        props.listSessao.map((value) => {
          return value.id === editValues.ID
            ? {
                ID: editValues.ID,
                NOME: editValues.NOME,
                DESCRICAO: editValues.DESCRICAO,
                ESTADO: editValues.ESTADO
              }
            : value;
        })
      );
    });
    handleClose();
  };
  //verificarDelete
  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.ID}`);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="ID"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="NOME"
            label="Nome Sessao"
            defaultValue={props.title}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="DESCRICAO"
            label="Descrição"
            defaultValue={props.descricao}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="ESTADO"
            label="Estado"
            defaultValue={props.estado}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteGame()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditGame()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}