import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, TextField, Modal, Backdrop } from "@mui/material";
import { Toaster } from "react-hot-toast";

// import { styled } from "@mui/material/styles";

import toast from "react-hot-toast";
import { purple } from "@mui/material/colors";

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

const StyledModalContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black background
});

const StyledModal = styled(Box)({
  width: "60rem",
  padding: "2rem 2rem",
  borderRadius: "0.8rem",
  backgroundColor: "#E6F0F3", // white background
  boxShadow: "0.4rem 0.4rem 2.4rem 0.2rem rgba(0, 0, 0, 0.3)", // shadow
});
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#024431"),
  backgroundColor: "#024430",
  "&:hover": {
    backgroundColor: "#024430",
  },
}));

function ZohoForm({ open, setOpen }) {
  const modalRef = useRef(null);
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
      // alert("Данные успешно отправлены!");
      toast.success("Данные успешно отправлены!");

      handleClose();

      setFormData({
        Company: "",
        First_Name: "",
        Last_Name: "",
        City: "",
        Email: "",
        Phone: "",
        Mobile: "",
      });
    }
  }

  function checkMandatory() {
    const mandatoryFields = ["Company", "First_Name", "Last_Name", "Phone"];
    for (let field of mandatoryFields) {
      if (!formData[field]) {
        toast.error(`${field} не может быть пустым.`);
        // alert(`${field} не может быть пустым.`);
        return false;
      }
    }
    return true;
  }

  return (
    <>
      <Toaster />
      <button className="btn btn-brand-1 hover-up" onClick={handleClickOpen}>
        Начать
      </button>
      <Modal open={open} onClose={handleClose}>
        <StyledModalContainer>
          <StyledModal>
            <>
              {/* <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              > */}
              <DialogTitle
                sx={{ m: 0, p: 1, fontSize: "25px" }}
                id="customized-dialog-title"
              >
                Начните свой онлайн-бизнес сегодня
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "white",
                }}
              >
                <CloseIcon />
              </IconButton>

              <form
                id="webform"
                action="https://crm.zoho.com/crm/WebToLeadForm"
                name="WebToLeads6118906000000454571"
                method="POST"
                onSubmit={handleSubmit}
                acceptCharset="UTF-8"
              >
                <DialogContent dividers>
                  <div className="zcwf_row" style={{ marginTop: 2 }}>
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
                </DialogContent>
                <DialogActions>
                  <Button
                    sx={{ mt: 1 }}
                    onClick={handleClose}
                    // type="submit"
                    // id="formsubmit"
                    autoFocus
                    contained
                    variant="outlined"
                    color="success"
                    className="formsubmit zcwf_button"
                    // onClick={handleClose}
                  >
                    Отмена
                  </Button>
                  <Button
                    sx={{ mt: 1 }}
                    type="submit"
                    id="formsubmit"
                    autoFocus
                    contained
                    variant="contained"
                    color="success"
                    className="formsubmit zcwf_button"
                    // onClick={handleClose}
                  >
                    Отправить
                  </Button>
                </DialogActions>
              </form>
              {/* </DialogContent> */}
              {/* </BootstrapDialog> */}
            </>
          </StyledModal>
        </StyledModalContainer>
      </Modal>
    </>
  );
}

export default ZohoForm;
