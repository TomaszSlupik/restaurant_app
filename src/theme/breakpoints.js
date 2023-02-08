import { createTheme } from '@mui/material/styles';


const breakpointValues = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  };
  const breakpoints = createTheme({ breakpoints: { values: breakpointValues } });


export default breakpoints
