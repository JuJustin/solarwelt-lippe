import React, { useState, useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Form from './Form';

const LoadingCircle = () => {
  const useExpired = (time: any) => {
    const [expired, setExpired] = useState(false);
    useEffect(() => {
      const timoutRef = setTimeout(() => {
        setExpired(true);
      }, time);
      return () => {
        clearTimeout(timoutRef);
      };
    }, [time]);
    return expired;
  };

  const [model] = useState({
    expiredAt: new Date().getTime() + 4000,
  });

  const [model2] = useState({
    expiredAt: new Date().getTime() + 6000,
  });

  const expired = useExpired(model.expiredAt - new Date().getTime());

  const expired2 = useExpired(model2.expiredAt - new Date().getTime());

  return (
    <>
      {expired2 && (
        <div className="offerBackground">
          <Form></Form>
        </div>
      )}
      {!expired2 && (
        <Stack
          direction="column"
          justifyContent="center"
          sx={{ marginTop: '20px' }}
        >
          {expired && (
            <div className="success-animation">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
          )}
          {!expired && (
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
            />
          )}
          <Typography
            sx={{
              textAlign: 'center',
              height: '40px',
              width: '300px',
              lineHeight: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              marginTop: '30px',
            }}
            fontSize="16px"
            component="h1"
            variant="h1"
          >
            <b>
              {expired
                ? 'Prüfung erfolgreich!'
                : 'Berechnung Ihrer Sparmöglichkeiten!'}
            </b>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              height: '40px',
              width: '300px',
              lineHeight: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'gray',
              marginTop: -3,
            }}
            fontSize="13px"
            component="h1"
            variant="h1"
          >
            <b>{expired ? '' : 'Dauert nur wenige Sekunden..'}</b>
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default LoadingCircle;
