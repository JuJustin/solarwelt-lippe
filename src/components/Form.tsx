import React, { useState } from 'react';

import {
  createStyles,
  makeStyles,
  Typography,
  Paper,
  Button,
} from '@material-ui/core';
import emailjs from 'emailjs-com';

import CustomDropDown from './CustomDropDown';
import CustomMultiTextField from './CustomMultiTextField';
import CustomTextField from './CustomTextField';

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      backgroundColor: '#ffffff',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      padding: 30,
      textAlign: 'center',
      minWidth: 350,
      maxHeight: 560,
      overflow: 'scroll',
    },
    title: {
      margin: '0px 0 20px 0',
    },
    button: {
      margin: '20px 0',
      backgroundColor: '#FF914D',
      color: '#ffffff',
    },
  })
);

type Values = {
  name1: string;
  name2: string;
  mail: string;
  phone: string;
  address: string;
  plz: string;
  location: string;
  verbrauch: string;
  width: string;
  message: string;
};

const verbrauch = [
  {
    value: '1 Personen (Ø 2500 kWh/Jahr)',
    label: '1 Personen (Ø 2500 kWh/Jahr)',
  },
  {
    value: '2 Personen (Ø 3200 kWh/Jahr)',
    label: '2 Personen (Ø 3200 kWh/Jahr)',
  },
  {
    value: '3 Personen (Ø 4000 kWh/Jahr)',
    label: '3 Personen (Ø 4000 kWh/Jahr)',
  },
  {
    value: '4 Personen (Ø 4500 kWh/Jahr)',
    label: '4 Personen (Ø 4500 kWh/Jahr)',
  },
  {
    value: '5 Personen (Ø 5500 kWh/Jahr)',
    label: '5 Personen (Ø 5500 kWh/Jahr)',
  },
  { value: 'Mehr (Ø 5500+ kWh/Jahr)', label: 'Mehr (Ø 5500+ kWh/Jahr)' },
];

const width = [
  { value: '25 - 50 m²', label: '25 - 50 m²' },
  { value: '50 - 75 m²', label: '50 - 75 m²' },
  { value: '75 - 100 m²', label: '75 - 100 m²' },
  { value: 'Mehr', label: 'Mehr' },
  { value: 'Ich weiß es nicht', label: 'Ich weiß es nicht' },
];

const Form = () => {
  const classes = useStyles();
  const [values, setValues] = useState<Values>({
    name1: '',
    name2: '',
    mail: '',
    phone: '',
    address: '',
    plz: '',
    location: '',
    verbrauch: '',
    width: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  function handleSubmit(e: { preventDefault: () => void; target: any }) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_solarwelt_lippe',
        'template_7mn1vp9',
        e.target,
        'kFxo4tmbZxW3djtq-'
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Paper className={classes.container}>
      <Typography variant={'h5'} className={classes.title}>
        Angebot einholen
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <CustomTextField
            changeHandler={handleChange}
            label={'Vorname'}
            name={'name1'}
          />
          <CustomTextField
            changeHandler={handleChange}
            label={'Nachname'}
            name={'name2'}
          />
        </div>
        <div>
          <CustomTextField
            changeHandler={handleChange}
            label={'E-Mail'}
            name={'mail'}
          />
          <CustomTextField
            changeHandler={handleChange}
            label={'Telefon'}
            name={'phone'}
          />
        </div>
        <div>
          <CustomTextField
            changeHandler={handleChange}
            label={'Addresszeile'}
            name={'address'}
          />
          <CustomTextField
            changeHandler={handleChange}
            label={'PLZ'}
            name={'plz'}
          />
          <CustomTextField
            changeHandler={handleChange}
            label={'Ort'}
            name={'location'}
          />
        </div>
        <CustomDropDown
          label={'Personen'}
          name={'verbrauch'}
          changeHandler={handleChange}
          values={verbrauch}
          currentValue={values.verbrauch}
        />
        <CustomDropDown
          label={'Dachfläche'}
          name={'width'}
          changeHandler={handleChange}
          values={width}
          currentValue={values.width}
        />
        <CustomMultiTextField
          changeHandler={handleChange}
          label={'Ihre Nachricht'}
          name={'message'}
        />
        <p className="text-xs">
          Mit dem Absenden dieses Formulars erklären Sie sich damit
          einverstanden, dass Ihre Daten, die im Rahmen dieser Kontaktaufnahme
          erhoben werden durch Solarwelt Lippe gespeichert werden.
        </p>
        <Button
          type={'submit'}
          variant={'contained'}
          className={classes.button}
        >
          Senden
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
