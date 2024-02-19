import React, {useState} from "react";
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  rail: {
    height: 10, 
    borderRadius: 8, 
    backgroundColor: '#ccc', 
  },
  track: {
    height: 10, 
    borderRadius: 8, 
    backgroundColor: '#3ad8e0', 
  },
  thumb: {
    height: 16,
    width: 24, 
    backgroundColor: '#fff', 
      border: 'none',
      borderRadius: 8,
  },
});

export default function MySlider({title}) {
  const [value, setValue] = useState(30);
  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <div className="slider-div">
      <p>{title}</p>
      <Box className="my-slider-class-box-1" display='flex' alignItems='center'>
        <Slider
          classes={{
              rail: classes.rail,
              track: classes.track,
              thumb: classes.thumb,
          }}
          defaultValue={30}
          value={value}
          onChange={handleSliderChange}
          aria-labelledby='continuous-slider'   
        />
      </Box>
      <Typography variant='subtitle1'>{`${value}%`}</Typography>
    </div>
  );
};