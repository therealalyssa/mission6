import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const FloatingPageNavigationButton = () => {

  return (
    <>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab sx={{ position: 'fixed', bottom: 16, right: 16, color: "white", backgroundColor: "#3577A1" }} aria-label={'up'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </>
  )
}

export default FloatingPageNavigationButton