import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const employee = useSelector(
    (state: any) => state.getEmployeeDetails.employeeDetails
  );
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleOpen = () => {
    // setOpen(true);
    // navigate("/profile");
  };

  const handleClose = () => {
    // navigate("/");
    // setOpen(false);
  };

  console.log(employee);

  const isEmpty = Object.values(employee).every((x) => x === null || x === "");

  console.log(isEmpty);
  if (isEmpty) setOpen(true);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Your Profile
          </Typography>
          <Button onClick={handleOpen}>Update</Button>
          <Button onClick={handleClose}>Do It Later</Button>
        </Box>
      </Modal>
    </div>
  );
}
