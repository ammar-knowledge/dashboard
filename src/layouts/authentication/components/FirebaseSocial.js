// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
import Google from 'assets/images/google.svg';
import Scho0loogy from 'assets/images/schology.svg';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const googleHandler = async () => {
    // login || singup
  };

  const twitterHandler = async () => {
    // login || singup
  };


  return (
    <Stack
      direction="column"
      spacing={matchDownSM ? 1 : 2}
      justifyContent={matchDownSM ? 'space-around' : 'space-between'}
      sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
    >
      <Button
        variant="outlined"
        color="secondary"
        sx={{color:'#000'}}
        fullWidth={!matchDownSM}
        style={{justifyContent:'flex-start'}}
        startIcon={<img src={Google} alt="Google" />}
        onClick={googleHandler}
      >
        {!matchDownSM && 'Continue with Google'}
      </Button>
      <Button
        variant="outlined"
        sx={{color:'#000'}}
        fullWidth={!matchDownSM}
        style={{justifyContent:'flex-start'}}
        startIcon={<img src={Scho0loogy} alt="Twitter" />}
        onClick={twitterHandler}
      >
        {!matchDownSM && 'Continue with Schoology'}
      </Button>
    </Stack>
  );
};

export default FirebaseSocial;
