import React from 'react';

import { MenuItem, TextField, withStyles } from '@material-ui/core';

type CustomDropDownProps = {
  label: string;
  name: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: Array<{ value: string; label: string }>;
  currentValue: string;
};

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'gray',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFBD59',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFBD59',
      },
      '&:hover fieldset': {
        borderColor: '#FFBD59',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFBD59',
      },
    },
  },
})(TextField);

const CustomTextField = (props: CustomDropDownProps) => {
  return (
    <CssTextField
      select // converts to a dropdown
      label={props.label}
      name={props.name}
      onChange={props.changeHandler}
      value={props.currentValue}
      variant={'outlined'} // enables special material-ui styling
      size={'small'}
      margin={'dense'}
      required
    >
      {props.values.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </CssTextField>
  );
};

export default CustomTextField;
