import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import CustomTextField from './CustomTextField';
import LinearWithValueLabel from './LinearWithValueLabel';
import LinkCard from './LinkCard';
import LoadingCircle from './LoadingCircle';

const haushalt = [
  {
    link: '1',
    saveColumn: 'haushalt',
    title: '1-2',
    src: './../2people.svg',
  },
  {
    link: '2',
    saveColumn: 'haushalt',
    title: '2-4',
    src: './../4people.svg',
  },
  {
    link: '3',
    saveColumn: 'haushalt',
    title: '5 und mehr',
    src: './../6people.svg',
  },
  {
    link: '4',
    saveColumn: 'haushalt',
    title: 'Weiß nicht',
    src: './../questionmarks.svg',
  },
];

const dachform = [
  {
    link: '5',
    saveColumn: 'dachform',
    title: 'Flachdach',
    src: './../flachdach.svg',
  },
  {
    link: '6',
    saveColumn: 'dachform',
    title: 'Pultdach',
    src: './../pultdach.svg',
  },
  {
    link: '7',
    saveColumn: 'dachform',
    title: 'Satteldach',
    src: './../satteldach.svg',
  },
  {
    link: '8',
    saveColumn: 'dachform',
    title: 'Anderes',
    src: './../questionmarks.svg',
  },
];

const verbrauch = [
  {
    link: '12',
    saveColumn: 'verbrauch',
    title: 'Morgens & abends',
    src: './../moab.svg',
  },
  {
    link: '13',
    saveColumn: 'verbrauch',
    title: 'Über den Tag verteilt',
    src: './../verteilt.svg',
  },
  {
    link: '14',
    saveColumn: 'verbrauch',
    title: 'Weiß nicht',
    src: './../questionmarks.svg',
  },
];

const eigenheim = [
  {
    link: '15',
    saveColumn: 'eigenheim',
    title: 'Ja',
    src: './../hausJa.svg',
  },
  {
    link: '16',
    saveColumn: 'eigenheim',
    title: 'Nein',
    src: './../hausNein.svg',
  },
];

const speicher = [
  {
    link: '17',
    saveColumn: 'speicher',
    title: 'Ja',
    src: './../solarja.svg',
  },
  {
    link: '18',
    saveColumn: 'speicher',
    title: 'Nein',
    src: './../solarnein.svg',
  },
  {
    link: '19',
    saveColumn: 'speicher',
    title: 'Beratung erwünscht',
    src: './../questionmarks.svg',
  },
];

const wallbox = [
  {
    link: '20',
    saveColumn: 'wallbox',
    title: 'Ja',
    src: './../wallboxja.svg',
  },
  {
    link: '21',
    saveColumn: 'wallbox',
    title: 'Nein',
    src: './../wallboxnein.svg',
  },
  {
    link: '22',
    saveColumn: 'wallbox',
    title: 'Beratung erwünscht',
    src: './../questionmarks.svg',
  },
];

const Form2 = () => {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState(
    'Wieviel Personen leben in Ihrem Haushalt?'
  );

  function cardBack() {
    if (step === 90) {
      setStep(75);
      setTitle('Wie lautet Ihre Postleitzahl?');
    } else if (step === 75) {
      setStep(70);
      setTitle('Wird ein Stromspeicher benötigt?');
    } else if (step === 70) {
      setStep(65);
      setTitle('Wird ein Wallbox benötigt?');
    } else if (step === 65) {
      setStep(60);
      setTitle('Sind Sie Eigentümer des Hauses?');
    } else if (step === 60) {
      setStep(45);
      setTitle('Wann verbrauchen Sie Ihren Strom?');
    } else if (step === 45) {
      setStep(15);
      setTitle('Welche Dachform hat ihr Haus?');
    } else if (step === 15) {
      setStep(0);
      setTitle('Wieviel Personen leben in Ihrem Haushalt?');
    }
  }

  type Values = {
    plz: string;
  };

  const [values, setValues] = useState<Values>({
    plz: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const weiter = () => {
    localStorage.setItem('plz', values.plz);
    setStep(90);
    setTitle('');
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ marginTop: '-20px' }}
            >
              <p className="testTitle">
                <b>Ihr Weg zur Solarlösung! </b>
              </p>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              textAlign={'center'}
              sx={{ marginTop: '-10px' }}
            >
              <div className="centeros">
                <p className="testTitle2">
                  In 2 Minuten zu Ihrem individuellen Angebot aus
                  Ostwestfalen-Lippe
                </p>
              </div>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ marginTop: '20px' }}
            >
              <LinearWithValueLabel progress={step} />
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ marginTop: '20px' }}
            >
              <Typography fontSize="20px" component="h2" variant="h2">
                <p className="testTitle2">{title}</p>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {step === 0 &&
            haushalt.map((input) => {
              return (
                <LinkCard
                  key={input.link}
                  title={input.title}
                  srcString={input.src}
                  saveColumn={input.saveColumn}
                  stepFunction={setStep}
                  nextStep={15}
                  titleFunction={setTitle}
                  nextTitle={'Welche Dachform hat ihr Haus?'}
                />
              );
            })}
          {step === 15 &&
            dachform.map((input) => {
              return (
                <LinkCard
                  key={input.link}
                  title={input.title}
                  srcString={input.src}
                  saveColumn={input.saveColumn}
                  stepFunction={setStep}
                  nextStep={45}
                  titleFunction={setTitle}
                  nextTitle={'Wann verbrauchen Sie Ihren Strom?'}
                />
              );
            })}
          {step === 45 &&
            verbrauch.map((input) => {
              return (
                <LinkCard
                  key={input.link}
                  title={input.title}
                  srcString={input.src}
                  saveColumn={input.saveColumn}
                  stepFunction={setStep}
                  nextStep={60}
                  titleFunction={setTitle}
                  nextTitle={'Sind Sie Eigentümer des Hauses?'}
                />
              );
            })}
          {step === 60 &&
            eigenheim.map((input) => {
              return (
                <LinkCard
                  key={input.link}
                  title={input.title}
                  srcString={input.src}
                  saveColumn={input.saveColumn}
                  stepFunction={setStep}
                  nextStep={65}
                  titleFunction={setTitle}
                  nextTitle={'Wird eine Wallbox benötigt?'}
                />
              );
            })}
          {step === 65 &&
            wallbox.map((input) => {
              return (
                <LinkCard
                  key={input.link}
                  title={input.title}
                  srcString={input.src}
                  saveColumn={input.saveColumn}
                  stepFunction={setStep}
                  nextStep={70}
                  titleFunction={setTitle}
                  nextTitle={'Wird ein Stromspeicher benötigt?'}
                />
              );
            })}
          {step === 70 &&
            speicher.map((input) => {
              return (
                <LinkCard
                  key={input.link}
                  title={input.title}
                  srcString={input.src}
                  saveColumn={input.saveColumn}
                  stepFunction={setStep}
                  nextStep={75}
                  titleFunction={setTitle}
                  nextTitle={'Wie lautet Ihre Postleitzahl?'}
                />
              );
            })}
          {step === 75 && (
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ marginTop: '30px' }}
            >
              <CustomTextField
                changeHandler={handleChange}
                label={''}
                name={'plz'}
                value={''}
              />
            </Stack>
          )}
          {step === 90 && <LoadingCircle></LoadingCircle>}
        </Grid>
        {step > 0 && step < 90 && (
          <Grid xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ marginTop: '20px' }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  height: '40px',
                  width: '160px',
                  lineHeight: '1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'gray',
                  '&:hover': {
                    color: 'black',
                    cursor: 'pointer',
                  },
                }}
                fontSize="16px"
                component="h1"
                variant="h1"
                onClick={() => {
                  cardBack();
                }}
              >
                <b>{'Ein Schritt Zurück'}</b>
              </Typography>
              {step === 75 && values.plz.length === 5 && (
                <Typography
                  sx={{
                    textAlign: 'center',
                    height: '40px',
                    width: '160px',
                    lineHeight: '1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    '&:hover': {
                      cursor: 'pointer',
                      border: '3px solid #FFBD59',
                    },
                    border: '1px solid #FFBD59',
                    background: '#FF914D',
                    borderRadius: 2,
                  }}
                  fontSize="16px"
                  component="h1"
                  variant="h1"
                  onClick={() => {
                    weiter();
                  }}
                >
                  <b>{'Weiter'}</b>
                </Typography>
              )}
            </Stack>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Form2;
