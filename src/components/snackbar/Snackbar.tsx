import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar(props: any) {
  React.useEffect(() => {
    handleClick({
      vertical: "top",
      horizontal: "center",
    });
  }, []);

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  handleClick({
    vertical: "top",
    horizontal: "center",
  });

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={props.message}
        key={vertical + horizontal}
      />
    </div>
  );
}
