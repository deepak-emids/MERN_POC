import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker(props: any) {
  const [value, setValue] = React.useState<Date | null>(null);

  const passDate = (nvalue: any) => {
    console.log(
      `${nvalue?.getUTCDay()}/${nvalue?.getUTCDate()}/${nvalue?.getUTCFullYear()}`
    );
    props.handleDate(
      `${nvalue?.getUTCDay()}/${nvalue?.getUTCDate()}/${nvalue?.getUTCFullYear()}`
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          // setValue(newValue);
          passDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
