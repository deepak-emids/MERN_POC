import * as React from "react";
import service from "../../services/services";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

//css
import "./dashboard.scss";

export default function Dashboard() {
  let navigate = useNavigate();

  //modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //modal

  return (
    <div className="welcome">
      <div className="card-welcome">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update Your profile
            </Typography>
            <Button onClick={handleClose}>Yes</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Modal>

        {/* <Welcome /> */}
      </div>
    </div>
  );
}
