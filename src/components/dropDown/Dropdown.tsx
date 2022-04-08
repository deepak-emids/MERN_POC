import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectVariants(props: any) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {props.drop.length ? (
            <div>
              {props.drop.map((key: string) => {
                <MenuItem value={key}>{key}</MenuItem>;
              })}
            </div>
          ) : (
            <MenuItem value={""}>None</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}
