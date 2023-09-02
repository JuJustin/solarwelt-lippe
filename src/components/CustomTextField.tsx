import React from 'react';

import { TextField, withStyles } from '@material-ui/core';

type CustomTextFieldProps = {
  label: string;
  name: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

const CustomTextField = (props: CustomTextFieldProps) => {
  return (
    <CssTextField
      label={props.label}
      name={props.name}
      onChange={props.changeHandler}
      variant={'outlined'} // enables special material-ui styling
      size={'small'}
      margin={'dense'}
      defaultValue={props.value}
      fullWidth
      required
    />
  );
};

export default CustomTextField;
