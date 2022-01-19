import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    // date picker for register form
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date de naissance"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
    </LocalizationProvider>
  );
}

export default BasicDatePicker;