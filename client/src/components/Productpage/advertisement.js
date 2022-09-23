import { Box, ImageList, Typography, Button } from "@mui/material";
import "./advertisement.css";
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
          height: "3000px",
          // border: "2px solid #3577A1",
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
        <Box fontSize="0.7rem" fontWeight="bold">
          <ul>
            <li className="item1">Procurement</li>
            <li className="item2">Repair & Production</li>
            <li className="item3">Software & Development</li>
            <Box
              fontSize="0.7rem"
              fontWeight="bold"
              sx={{
                display: "flex",
                marginLeft: "140px",
                marginTop: "-70px",
              }}
            >
              <ul>
                <li className="item4">Onsite Support</li>
                <li className="item5">Install & Display</li>
                <li className="item6">Managed Service</li>
              </ul>
            </Box>
          </ul>
        </Box>

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
              textAlign: "center",
            }}
          >
            {" "}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Still not sure? <br></br>Take our quiz to find <br></br>the best
            laptop for you! <br></br>
          </Box>
        </Box>
        <Box>
          <br></br>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          className="quizbtn"
        >
          <Quizpg1>Start Quiz</Quizpg1>
        </Box>
      </Box>
    </>
  );
};

export default Advertisement;
