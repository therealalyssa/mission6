import { Box, ImageList, Typography, Button } from "@mui/material";
import "./advertisement.css";
import Stack from "@mui/material/Stack";
import Vector from "./../img/Vector.png";
import Vector2 from "./../img/Vector2.png";
import Vector3 from "./../img/Vector3.png";
import Vector4 from "./../img/Vector4.png";
import Vector5 from "./../img/Vector5.png";
import Vector6 from "./../img/Vector6.png";
import Sidebar from "./../img/sidebar1.png";

import flexi from "./../img/flexi.png";
import mtl from "./../img/mtl.png";
import ibm from "./../img/ibm.png";
import fn from "./../img/fn.png";

import ImageListItem from "@mui/material/ImageListItem";

import * as React from "react";

import Quizpg1 from "./../Quizpg1";

const Advertisement = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          float: "right",
          flexDirection: "column",
          width: "25%",
          height: "2000px",
          border: "2px solid #3577A1",
          backgroundColor: "#F9FBFF",
        }}
      >
        <br></br>
        <br></br>
        <Box
          fontSize="1.6rem"
          fontWeight="bold"
          color="#3577A1"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Pb Tech Offers end-to-end
        </Box>
        <Box
          fontSize="1.6rem"
          fontWeight="bold"
          color="#3577A1"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          IT services
        </Box>
        <Box
          fontSize="1rem"
          fontWeight="bold"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Apply for a Business Account today!
        </Box>
        <br></br>
        <Stack direction="row" spacing={1} justifyContent="left">
          <Typography>
            <img src={Vector} alt="tick" />
            Procurement
          </Typography>
          <Typography>
            <img src={Vector2} alt="tick" />
            Onsite Support
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="left">
          <Typography>
            <img src={Vector3} alt="tick" />
            Repair & Production
          </Typography>
          <Typography>
            <img src={Vector4} alt="tick" />
            Install & Display
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="left">
          <Typography>
            <img src={Vector5} alt="tick" />
            Software & Development
          </Typography>
          <Typography>
            <img src={Vector6} alt="tick" />
            Managed Service
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageList
            sx={{
              width: "300px",
              height: "250px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImageListItem>
              <img
                src={Sidebar}
                alt="hey"
                sx={{ display: "flex", justifyContent: "center" }}
              />
            </ImageListItem>
          </ImageList>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#3577A1",
              width: "15vw",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            Apply for Business Account
          </Button>{" "}
        </Box>

        <br></br>
        <br></br>

        <Box
          fontSize="1.6rem"
          fontWeight="bold"
          color="#3577A1"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Business Finance
        </Box>
        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Learn more about business finance options
        </Box>
        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          available at PB Tech below or email
        </Box>

        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          websales@pbtech.co.nz to chat direct with our
        </Box>

        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          service team.
        </Box>
        <br></br>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageList
            sx={{
              width: "300px",
              height: "50x",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImageListItem>
              <img
                src={flexi}
                alt="hey"
                sx={{ display: "flex", justifyContent: "center" }}
              />
            </ImageListItem>
          </ImageList>
        </Box>
        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Specialises in business leasing to procure
        </Box>
        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          high cost equipment.
        </Box>
        <br></br>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageList
            sx={{
              width: "300px",
              height: "50x",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImageListItem>
              <img
                src={mtl}
                alt="hey"
                sx={{ display: "flex", justifyContent: "center" }}
              />
            </ImageListItem>
          </ImageList>
        </Box>

        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          MTL Finance specialises in School and
        </Box>
        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          large corporate finance.
        </Box>
        <br></br>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageList
            sx={{
              width: "300px",
              height: "50x",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImageListItem>
              <img
                src={ibm}
                alt="hey"
                sx={{ display: "flex", justifyContent: "center" }}
              />
            </ImageListItem>
          </ImageList>
        </Box>

        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          The world's premier single source provider
        </Box>
        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          of payment options for IT solutions.
        </Box>
        <br></br>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageList
            sx={{
              width: "300px",
              height: "50x",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImageListItem>
              <img
                src={fn}
                alt="hey"
                sx={{ display: "flex", justifyContent: "center" }}
              />
            </ImageListItem>
          </ImageList>
        </Box>

        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Easy flexible personal finance options with no
        </Box>
        <Box
          fontSize="1rem"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          deposit terms of up to 36 months available.
        </Box>
        <br></br>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#3577A1",
              width: "8vw",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            Learn More
          </Button>{" "}
        </Box>
        <br></br>
        <br></br>
        <br></br>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "19vw",
              height: "200px",
              backgroundColor: "#3577A1",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {" "}
            <br></br>
            Still not sure? <br></br>Take our quiz to find <br></br>the best
            laptop for you! <br></br>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          className="quizbtn"
        >
          <Quizpg1></Quizpg1>
        </Box>
      </Box>
    </>
  );
};

export default Advertisement;
