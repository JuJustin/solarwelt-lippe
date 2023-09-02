import * as React from 'react';

import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box sx={{ width: '80%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{
            backgroundColor: '#e7fade',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#7dab67',
            },
          }}
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

type ProgressProps = {
  progress: number;
};

const LinearWithValueLabel = (props: ProgressProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={props.progress} />
    </Box>
  );
};

export default LinearWithValueLabel;
