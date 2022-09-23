import React from "react";
import { Box } from "@mui/material";
import ProductCard from "./productInfoCard";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ReviewCard from "./ReviewCard";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(2),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const ProductInfo = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          float: "left",
          flexDirection: "column",
          width: "74%",
          height: "2000px",
          // border: "2px solid #3577A1",
        }}
      >
        <Box>
          <br></br>
        </Box>
        <Box>
          <br></br>
        </Box>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                fontSize="1.3rem"
                fontWeight="bold"
                sx={{ color: "#3577A1" }}
              >
                Features
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#3577A1" }}>
                Modern design for today's workstyles
              </Typography>
              <Typography>
                With a new compact design, the HP ProBook 450 Laptop PC delivers
                commercial performance, security, and durability to
                professionals at growing companies who move from desk to
                meetings
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                A new design that fits modern workstyles
              </Typography>
              <Typography>
                The compact, light, slim chassis with aluminum components is
                easy to carry from place to place. Enjoy an over 87-percent
                screen-to-body ratio and a quiet, responsive keyboard.
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                Power that lasts
              </Typography>
              <Typography>
                Equipped with the latest Intel® processor and high- performance
                memory, the HP ProBook 450 drives performance with long battery
                life and high-speed solid-state drives.
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                Protected by HP Wolf Security
              </Typography>
              <Typography>
                HP Wolf Security for Business creates a hardware-enforced,
                always-on, resilient defense. From the BIOS to the browser,
                above, in, and below the OS, these constantly evolving solutions
                help produce incredible results
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                fontSize="1.3rem"
                fontWeight="bold"
                sx={{ color: "#3577A1" }}
              >
                Specifications
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#3577A1" }}>
                Operating System
              </Typography>
              <Typography>Windows 10 Pro 64</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Memory</Typography>
              <Typography>1.8 GB, 2 Slots</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Camera</Typography>
              <Typography>720p HD Camera</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Audio</Typography>
              <Typography>
                Dual stereo speakers, dual array microphone
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Keyboard</Typography>
              <Typography>
                HP Premium Keyboard - spill-resistant, backlit keyboard with
                numeric keypad
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Display</Typography>
              <Typography>
                39.6cm diagonal, FHD (1920 x 1080), IPS, narrow bezel,
                anti-glare, 250 nits, 45% NTSC
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Battery Type</Typography>
              <Typography>HP Long Life 3-cell, 45 Wh Li-ion</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Graphics</Typography>
              <Typography>Integrated</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                Processor Family
              </Typography>
              <Typography>11th Generation Intel Core i5 processor</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                Minimum Dimensions
              </Typography>
              <Typography>35.94 x 23.29 x 1.99cm</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Weight</Typography>
              <Typography>1.74kg</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                Management Features
              </Typography>
              <Typography>
                HP Driver Packs; HP System Software Manager (SSM); HP BIOS
                Config Utility (BCU); HP Client Catalog; HP Manageability
                Integration Kit Gen3
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                Sustainable Impact
              </Typography>
              <Typography>Low halogen; TCO Certified</Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                Security Management
              </Typography>
              <Typography>
                Absolute persistence module; HP DriveLock and Automatic
                DriveLock; HP Secure Erase; Preboot authentication; TPM 2.0
                embedded security chip shipped with Windows 10 (Common Criteria
                E
              </Typography>
              <Typography>
                BlOSphere Gen5; HP Sure Sense; BIOS Update via Network; Master
                Boot Record Security; Support for chassis padlocks and cable
                lock devices; HP Sure Start Gen6; HP Sure Run Gen3; HP Sure
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>Ports</Typography>
              <Typography>
                3 x USB Ports, 1 x Headphone/Microphone Combo, 1 x HDMI, 1 x AC
                Power
              </Typography>
              <Typography>
                <br></br>
              </Typography>
              <Typography sx={{ color: "#3577A1" }}>
                Internal Storage
              </Typography>
              <Typography>256 GB PCle NVMe SSD Software Include</Typography>
              <Typography>
                HP Connection Optimizer; HP Image Assistant; HP Hotkey Support;
                HP Noice Cancellation Software; HP Support Assistant; HP Power
                Manager; myHP; HP Privacy Settings; HSA Fusion for Con
              </Typography>
              <Typography>
                Customizer for Commercial; HP Notifications; Xerox Docushare
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Box>
          <br></br>
        </Box>
        <Box>
          <br></br>
        </Box>
        <Box>
          <br></br>
        </Box>
        <ProductCard></ProductCard>
        <ReviewCard></ReviewCard>
      </Box>
      <Box>
        <br></br>
      </Box>
      <Box></Box>
    </>
  );
};

export default ProductInfo;
