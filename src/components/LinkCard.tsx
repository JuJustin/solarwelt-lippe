import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

function getItemCount() {
  let w = 2;
  if (typeof window !== 'undefined') {
    w = window.innerWidth;
  }

  if (w < 200) {
    return 12;
  }
  if (w > 200 && w < 300) {
    return 6;
  }
  if (w > 300 && w < 450) {
    return 4;
  }
  if (w > 450) {
    return 2;
  }

  return 0;
}

type LinkCardProps = {
  title: string;
  srcString: string;
  saveColumn: string;
  stepFunction: any;
  nextStep: number;
  titleFunction: any;
  nextTitle: string;
};

function cardClick(
  saveColumn: string,
  title: string,
  stepFunction: any,
  nextStep: number,
  titleFunction: any,
  nextTitle: string
) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(saveColumn, title);
    stepFunction(nextStep);
    titleFunction(nextTitle);
  }
}

const LinkCard = (props: LinkCardProps) => {
  return (
    <Grid xs={getItemCount()} sx={{ width: '190px', marginTop: '50px' }}>
      <Stack direction="row" justifyContent="center">
        <Card
          sx={{
            display: 'flex',
            borderRadius: '15px',
            border: '2px solid #FFFFFF',
            '&:hover': {
              border: '2px solid #FF914D',
              cursor: 'pointer',
            },
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column' }}
            onClick={() => {
              cardClick(
                props.saveColumn,
                props.title,
                props.stepFunction,
                props.nextStep,
                props.titleFunction,
                props.nextTitle
              );
            }}
          >
            <CardContent
              sx={{
                width: '170px',
                height: '170px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              {
                <img
                  className="entryIcon"
                  src={props.srcString}
                  alt={props.title}
                />
              }
              <Typography
                sx={{
                  marginTop: '25px',
                  textAlign: 'center',
                  height: '10px',
                  width: '110px',
                  lineHeight: '1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                fontSize="16px"
                component="h1"
                variant="h1"
              >
                <b>{props.title}</b>
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Stack>
    </Grid>
  );
};

export default LinkCard;
