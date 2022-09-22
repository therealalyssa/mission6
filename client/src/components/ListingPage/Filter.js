import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { 
    Box, 
    Button, 
    Card, 
    CardContent, 
    Typography 
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (

    <Box>
        <Button 
            style={{ 
                color: "#414750", 
                background: "#FFFFFF", 
                border: "1px solid #CFD4D9",
                width: "405px", 
                paddingLeft: "75px",
                }} 

            variant="outlined">
            Reset Filters
            <ClearIcon />
        </Button>

        <Card
            style={{
                width: "405px",
                height: "982px",
                paddingLeft: "75px",
                paddingTop: "5px",
                paddingBottom: "15px"
            }}>
            
            <CardContent>
                
                <Typography>
                    <List
                    sx={{ 
                        width: '100%', 
                        maxWidth: 360, 
                        bgcolor: 'background.paper' }}

                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="Brand" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    
                        <Collapse in={open} timeout="auto" unmountOnExit>

                            <List component="div" disablePadding>
                            
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Apple" />
                                </ListItemButton>
                                
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="HP" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Microsoft" />
                                </ListItemButton>
                            </List>
                                
                            <List>
                                <ListItemButton>
                                    <ListItemText primary="Price Range" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="CPU Family" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Storage Capacity" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Screen Size" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Memory Size" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="SSD Capacity" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="HDD Capacity" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Touch Screen" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Ram" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Drives" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Wi-fi" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Bluetooth" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="VR" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Weight" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Color" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Warranty" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                            </List>

                        </Collapse>

                    </List>
                </Typography>
            </CardContent>
        </Card>
    </Box>
  );
}
