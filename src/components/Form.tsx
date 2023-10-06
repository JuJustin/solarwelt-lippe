import React, { useState } from 'react';

import {
  createStyles,
  makeStyles,
  Typography,
  Button,
  TextField,
  Box,
} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import emailjs from 'emailjs-com';

import CustomMultiTextField from './CustomMultiTextField';
import CustomTextField from './CustomTextField';

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      backgroundColor: 'rgba(255, 241, 211, 0.2)',
      borderRadius: '20px',
      padding: 30,
      textAlign: 'center',
      minWidth: 350,
      maxWidth: 550,
    },
    title: {
      margin: '0px 0 20px 0',
    },
    button: {
      margin: '20px 0',
      backgroundColor: '#FF914D',
      color: '#ffffff',
      textTransform: 'none',
    },
  })
);

type Values = {
  name1: string;
  name2: string;
  mail: string;
  phone: string;
  address: string;
  address2: string;
  plz: string;
  location: string;
  message: string;
  delivery: string;
  strom: string;
  wallbox: string;
  speicher: string;
};

const Form = () => {
  const classes = useStyles();
  const [values, setValues] = useState<Values>({
    name1: '',
    name2: '',
    mail: '',
    phone: '',
    address: '',
    address2: '',
    plz: '',
    location: '',
    message: '',
    delivery: '',
    strom: '',
    wallbox: '',
    speicher: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [clicked, setClicked] = useState(false);
  const [offerSent, setOfferSent] = useState(false);
  const [disableFields, setDisableFields] = useState(true);

  function handleSubmit(e: { preventDefault: () => void; target: any }) {
    e.preventDefault();

    setClicked(true);
    setDisableFields(false); // dummy
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

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
          setOfferSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const [selectedValue, setSelectedValue] = React.useState('Schnellstmöglich');

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const controlProps2 = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange2,
    value: item,
    name: 'delivery',
    inputProps: { 'aria-label': item },
  });

  return (
    <>
      <Box className={classes.container}>
        {clicked ? (
          <>
            {offerSent ? (
              <Typography variant={'h5'} className={classes.title}>
                Vielen Dank! Ihre Anfrage wird schnellstmöglich bearbeitet.
              </Typography>
            ) : (
              <>
                <CircularProgress
                  size="6rem"
                  sx={{
                    color: '#FFBD59',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    lineHeight: '1',
                    width: '300px',
                    height: '40px',
                    marginLeft: 12,
                  }}
                ></CircularProgress>
                <Typography variant={'h5'}>Anfrage wird gesendet!</Typography>
              </>
            )}
          </>
        ) : (
          <>
            <Typography variant={'h5'} className={classes.title}>
              Deine Kontaktdaten
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                className="dummy"
                name="haushalt"
                value={localStorage.getItem('haushalt')!}
              ></TextField>
              <TextField
                className="dummy"
                name="dachform"
                value={localStorage.getItem('dachform')!}
              ></TextField>
              <TextField
                className="dummy"
                name="wallbox"
                value={localStorage.getItem('wallbox')!}
              ></TextField>
              <TextField
                className="dummy"
                name="speicher"
                value={localStorage.getItem('speicher')!}
              ></TextField>
              <TextField
                className="dummy"
                name="verbrauch"
                value={localStorage.getItem('verbrauch')!}
              ></TextField>
              <TextField
                className="dummy"
                name="eigenheim"
                value={localStorage.getItem('eigenheim')!}
              ></TextField>
              <TextField
                className="dummy"
                name="plz"
                value={localStorage.getItem('plz')!}
              ></TextField>
              <div className="divOneRow">
                <CustomTextField
                  changeHandler={handleChange}
                  label={'Vorname'}
                  name={'name1'}
                  value={''}
                />
                <CustomTextField
                  changeHandler={handleChange}
                  label={'Nachname'}
                  name={'name2'}
                  value={''}
                />
              </div>
              <div>
                <CustomTextField
                  changeHandler={handleChange}
                  label={'E-Mail'}
                  name={'mail'}
                  value={''}
                />
                {disableFields ? (
                  <div />
                ) : (
                  <CustomTextField
                    changeHandler={handleChange}
                    label={'Telefon'}
                    name={'phone'}
                    value={''}
                  />
                )}
              </div>
              {disableFields ? (
                <div />
              ) : (
                <>
                  <div className="divOneRow">
                    <div className="flex-2">
                      <CustomTextField
                        changeHandler={handleChange}
                        label={'Straße'}
                        name={'address'}
                        value={''}
                      />
                    </div>
                    <div className="flex-1.3">
                      <CustomTextField
                        changeHandler={handleChange}
                        label={'Hausnummer'}
                        name={'address2'}
                        value={''}
                      />
                    </div>
                  </div>
                  <div className="divOneRow">
                    <div className="flex-1">
                      <CustomTextField
                        changeHandler={handleChange}
                        label={'PLZ'}
                        name={'plz'}
                        value={localStorage.getItem('plz')!}
                      />
                    </div>
                    <div className="flex-3">
                      <CustomTextField
                        changeHandler={handleChange}
                        label={'Ort'}
                        name={'location'}
                        value={''}
                      />
                    </div>
                  </div>
                </>
              )}

              {disableFields ? (
                <div />
              ) : (
                <div>
                  <CustomTextField
                    changeHandler={handleChange}
                    label={'Jährlicher Stromverbrauch in kWh'}
                    name={'strom'}
                    value={''}
                  />
                </div>
              )}

              {disableFields ? (
                <div />
              ) : (
                <div className="mt-2">
                  <Typography>
                    Wann soll Ihre PV-Anlage installiert werden?
                  </Typography>
                </div>
              )}

              {disableFields ? (
                <div />
              ) : (
                <div className="mb-2">
                  <FormControl>
                    <RadioGroup name="row-radio-buttons-group">
                      <FormControlLabel
                        value="now"
                        control={
                          <Radio
                            {...controlProps2('Schnellstmöglich')}
                            size="small"
                            sx={{
                              color: '#696969',
                              '&.Mui-checked': {
                                color: '#FFBD59',
                              },
                            }}
                          />
                        }
                        label="Schnellstmöglich"
                        sx={{
                          color: '#696969',
                          '&.Mui-checked': {
                            color: '#FFBD59',
                          },
                        }}
                      />
                      <FormControlLabel
                        value="soon"
                        control={
                          <Radio
                            {...controlProps2('1-3 Monate')}
                            size="small"
                            sx={{
                              color: '#696969',
                              '&.Mui-checked': {
                                color: '#FFBD59',
                              },
                            }}
                          />
                        }
                        label="1-3 Monate"
                        sx={{
                          color: '#696969',
                          '&.Mui-checked': {
                            color: '#FFBD59',
                          },
                        }}
                      />
                      <FormControlLabel
                        value="late"
                        control={
                          <Radio
                            {...controlProps2('Nach 3 Monaten')}
                            size="small"
                            sx={{
                              color: '#696969',
                              '&.Mui-checked': {
                                color: '#FFBD59',
                              },
                            }}
                          />
                        }
                        label="Nach 3 Monaten"
                        sx={{
                          color: '#696969',
                          '&.Mui-checked': {
                            color: '#FFBD59',
                          },
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              )}

              <CustomMultiTextField
                changeHandler={handleChange}
                label={'Ihre Nachricht'}
                name={'message'}
              />
              <p className="text-xs">
                Mit dem Absenden dieses Formulars erklären Sie sich damit
                einverstanden, dass Ihre Daten, die im Rahmen dieser
                Kontaktaufnahme erhoben werden durch B & B Solarwelt-Lippe
                gespeichert werden.
              </p>
              <Button
                type={'submit'}
                variant={'contained'}
                className={classes.button}
                title="Unverbindliches Angebot einholen"
                endIcon={<SendIcon />}
              >
                Unverbindliches Angebot einholen
              </Button>
            </form>
          </>
        )}
      </Box>
    </>
  );
};

export default Form;
