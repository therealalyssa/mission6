import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const NavigateLeftButton = () => {
  return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" sx={{ left:6, color: "#111827", backgroundColor: "#F3F4F6" }} aria-label={'left'}
        >
        <ArrowBackIosIcon sx={{fontSize:'medium'}} />
      </Fab>
    </Box>
  </>
)
}


export default NavigateLeftButton