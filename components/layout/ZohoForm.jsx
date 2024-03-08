import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "600px", // Set width for desktop size
    [theme.breakpoints.down("sm")]: {
      width: "90%", // Set width for phone size
    },
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ZohoForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    Company: "",
    First_Name: "",
    Last_Name: "",
    City: "",
    Email: "",
    Phone: "",
    Mobile: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (checkMandatory()) {
      // Send data to server
      alert("Данные успешно отправлены!");
    }
  }

  function checkMandatory() {
    const mandatoryFields = ["Company", "First_Name", "Last_Name", "Phone"];
    for (let field of mandatoryFields) {
      if (!formData[field]) {
        alert(`${field} не может быть пустым.`);
        return false;
      }
    }
    return true;
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Начните свой онлайн-бизнес сегодня
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <form
            id="webform"
            action="https://crm.zoho.com/crm/WebToLeadForm"
            name="WebToLeads6118906000000454571"
            method="POST"
            onSubmit={handleSubmit}
            acceptCharset="UTF-8"
          >
            <div  className="zcwf_row">
              <TextField
                label="Ваше имя"
                variant="outlined"
                name="First_Name"
                value={formData.First_Name}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }} // Add margin bottom
              />
              <TextField
                label="Ваша фамилия"
                variant="outlined"
                name="Last_Name"
                value={formData.Last_Name}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }} // Add margin bottom
              />
              <TextField
                label="Город"
                variant="outlined"
                name="City"
                value={formData.City}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }} // Add margin bottom
              />
              <TextField
                label="Название вашей должности"
                variant="outlined"
                name="Company"
                value={formData.Company}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }} // Add margin bottom
              />
              <TextField
                label="Электронная почта"
                variant="outlined"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }} // Add margin bottom
              />
              <TextField
                label="Телефон"
                variant="outlined"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }} // Add margin bottom
              />
              <TextField
                label="Реферальный номер"
                variant="outlined"
                name="Mobile"
                value={formData.Mobile}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }} // Add margin bottom
              />
            </div>

            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

export default ZohoForm;
