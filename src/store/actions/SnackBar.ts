export const Snackbar = (open: boolean) => async (dispatch: any) => {
  dispatch({
    type: "SNACKBAR",
    payload: open,
  });
};
