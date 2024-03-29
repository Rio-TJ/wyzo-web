import React, { useState, useRef, useEffect, Fragment } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  Box,
  TextField,
  Modal,
  Backdrop,
  Autocomplete,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Toaster } from "react-hot-toast";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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

const top100Films2 = [
  "CTO",
  "CEO",
  "Head of IT department",
  "Product Manager",
  "Product Owner",
  "Business developer",
  "Procurement manager",
  "Other",
];
const top100Films = ["РФ", "Казахстан", "Узбекистан", "Таджикистан"];

function ZohoForm({ open, setOpen }) {
  const modalRef = useRef(null);
  const [selectCity, setSelectCity] = useState(null);
  const [selectCity2, setSelectCity2] = useState(null);
  const [inputValue, setInputValue] = useState(""); // State to store user-typed position
  const [selectedValue, setSelectedValue] = useState(null); // State to store overall position value (selected or typed)

  const [formData, setFormData] = useState({
    Company: "",
    First_Name: "",
    // City: "",
    // City: "",
    // Position: "",
    Email: "",
    Phone: "",
    Mobile: "",
  });

  const handleSelectChange = (event, newValue) => {
    setSelectedValue(newValue);
    setSelectCity2(newValue); // Update position state with selected value
    setFormData((prevState) => ({
      ...prevState,
      Position: newValue,
    }));
  };

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
    setSelectedValue(newValue); // Update position state with typed value
    setFormData((prevState) => ({
      ...prevState,
      Position: newValue,
    }));
  };

  const handleSelectCity = (event, value, name) => {
    console.log(event, value);
    setSelectCity(value);
    setFormData((prevState) => ({
      ...prevState,
      City: value,
      Position: selectedValue,
    }));
  };
  const handleSelectCity2 = (event, value) => {
    setSelectCity2(value);
    setFormData((prevState) => ({
      ...prevState,
      Position: value,
    }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;
    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      City: selectCity,
      Position: selectedValue,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFormData((prevState) => ({
      ...prevState,
      City: selectCity,
      Position: selectedValue,
    }));
    console.log(formData);
    if (checkMandatory()) {
      // Send data to server
      // alert("Данные успешно отправлены!");
      toast.success("Данные успешно отправлены!");

      handleClose();
      setSelectCity(null);
      setInputValue("");
      setSelectedValue(null);
      setFormData({
        Company: "",
        First_Name: "",
        City: "",
        Position: "",
        Email: "",
        Phone: "",
        Mobile: "",
      });
    }
  }

  function checkMandatory() {
    const mandatoryFields = [
      "Company",
      "First_Name",
      "Email",
      "Phone",
      // "Position",
    ];

    for (let field of mandatoryFields) {
      if (!formData[field]) {
        toast.error(
          `${
            field == "Company"
              ? "Компании"
              : field == "First_Name"
              ? "Ваша имя"
              : field == "Phone"
              ? "Телефон"
              : field == "Email"
              ? "Электронная почта"
              : "ы"
          } не может быть пустым.`
        );

        return false;
      }
      if (!selectCity) {
        toast.error(`Город не может быть пустым.`);
        return false;
      }
      if (!selectedValue) {
        toast.error(`Ваша должность не может быть пустым.`);
        return false;
      }
    }
    setFormData((prevState) => ({
      ...prevState,
      City: selectCity,
      Position: selectedValue,
    }));
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
                sx={{
                  m: 0,
                  p: 1.5,
                  fontSize: "25px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                id="customized-dialog-title"
              >
                <p style={{ fontSize: "26px", fontWeight: 500 }}>
                  {" "}
                  Начните свой онлайн-бизнес сегодня
                </p>
                <img
                  alt="Ecom"
                  src="assets/imgs/template/fin2.svg"
                  style={{ width: "100px", height: "25px" }}
                />
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
                    {/* <TextField
                      label="Ваша фамилия"
                      variant="outlined"
                      name="Last_Name"
                      value={formData.Last_Name}
                      onChange={handleChange}
                      fullWidth
                      sx={{ mb: 2 }} // Add margin bottom
                    /> */}
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      // sx={{ width: 300 }}
                      value={selectCity}
                      name="City"
                      onChange={handleSelectCity}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          label="Город"
                          // value={formData.City}
                          // onChange={handleChange}
                        />
                      )}
                    />
                    <Autocomplete
                      value={selectedValue} // Use selectedValue to represent overall position
                      onChange={handleSelectChange}
                      inputValue={inputValue}
                      onInputChange={handleInputChange}
                      options={top100Films2} // Predefined positions
                      freeSolo // Allow users to type their own position
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Ваша должность"
                          variant="outlined"
                          // InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                    {/* <TextField
                      label="Город"
                      variant="outlined"
                      name="City"
                      value={formData.City}
                      onChange={handleChange}
                      fullWidth
                      sx={{ mb: 2 }} // Add margin bottom
                    /> */}
                    <TextField
                      label="Название компании"
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
                      name="Mobile"
                      value={formData.Mobile}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                      fullWidth
                      required
                      label={
                        <Fragment>
                          <InfoOutlinedIcon
                            style={{
                              paddingRight: "5px",
                              order: 999,
                              // fontSize: "20px",
                            }}
                            fontSize="medium"
                          />
                          <Typography style={{ display: "inline-block" }}>
                            Номер телефона реферала
                          </Typography>
                        </Fragment>
                      }
                      variant="outlined"
                    />
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button
                    sx={{
                      mt: 1,
                      border: "1px solid #6c757d",
                      color: "#6c757d",
                    }}
                    onClick={handleClose}
                    // type="submit"
                    // id="formsubmit"
                    autoFocus
                    contained
                    variant="outlined"
                    // color="success"
                    className="formsubmit zcwf_button"
                    // onClick={handleClose}
                  >
                    Отмена
                  </Button>
                  <Button
                    sx={{
                      mt: 1,
                      backgroundColor: "#6c757d",
                    }}
                    type="submit"
                    id="formsubmit"
                    autoFocus
                    contained
                    variant="contained"
                    // color="success"

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
