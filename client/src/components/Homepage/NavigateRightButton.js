import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavigateRightButton = () => {
  return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" sx={{ right:6, color: "#111827", backgroundColor: "#F3F4F6" }} aria-label={'left'}
        >
        <ArrowForwardIosIcon sx={{fontSize:'medium'}} />
      </Fab>
    </Box>
  </>
  )
}

export default NavigateRightButton
