import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

import Icon from "./img/ellipse2.png";

import Business from "./img/bs.png";
import Personal from "./img/ps.png";
import Gaming from "./img/gm.png";
import Lightweight from "./img/lw.png";
import HP from "./img/hp.png";
import twoone from "./img/2n1.png";

import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import "./Quiz.css";

import Quizpg3 from "./Quizpg3";

const Quizpg2 = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <>
      <div>
        <Typography className="rightside2"></Typography>
        <Typography className="leftside">
          <Avatar alt="A" src={Icon} sx={{ width: 110, height: 110 }} />
        </Typography>
        <Typography className="rightside">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            2. Choose your Operating System (OS)
          </Typography>

          <Typography>
            Need help? View our{" "}
            <a href="https://hardwired.pbtech.co.nz/article/675/Laptop-Buying-Guide?qr=need_help_banner&qr=cb-47934">
              buyer guide
            </a>
          </Typography>
          <Typography sx={{ fontStyle: "italic" }}>
            You can select one or more
          </Typography>
        </Typography>
        <Link to="/">
          <Button
            style={{ textTransform: "capitalize", color: "black" }}
            className="skip-button"
            variant="outlined"
          >
            Skip
          </Button>
        </Link>
        <Typography className="top-card">
          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop={8}
            marginBottom={2}
          >
            <Grid item md={3}>
              <Card
                className="infocard"
                sx={{ maxWidth: 160 }}
                variant="outlined"
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                      variant="p"
                      component="div"
                    >
                      Business
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="90"
                    width="60"
                    image={Business}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card
                className="infocard"
                sx={{ maxWidth: 160 }}
                variant="outlined"
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                      variant="p"
                      component="div"
                    >
                      Personal
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="90"
                    width="60"
                    image={Personal}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card
                className="infocard"
                sx={{ maxWidth: 160 }}
                variant="outlined"
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                      variant="p"
                      component="div"
                    >
                      Gaming
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="90"
                    width="60"
                    image={Gaming}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Typography>
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={3}>
            <Card
              className="infocard"
              sx={{ maxWidth: 170 }}
              variant="outlined"
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                    variant="p"
                    component="div"
                  >
                    Light Weight
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="90"
                  width="60"
                  image={Lightweight}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              className="infocard"
              sx={{ maxWidth: 170 }}
              variant="outlined"
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                    variant="p"
                    component="div"
                  >
                    High performance
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="90"
                  width="60"
                  image={HP}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              className="infocard"
              psx={{ maxWidth: 170 }}
              variant="outlined"
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                    variant="p"
                    component="div"
                  >
                    2 in 1
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="90"
                  width="60"
                  image={twoone}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          className="number-button"
        >
          <Button
            style={{
              backgroundColor: "#3577A1",
            }}
          >
            1
          </Button>
          <Button variant="outlined">2</Button>
          <Button variant="outlined">3</Button>
        </ButtonGroup>
        <Button
          style={{
            backgroundColor: "#3577A1",
            width: "3vw",
            color: "white",
            textTransform: "capitalize",
          }}
          className="next-button"
          onClick={() => setIsClicked(!isClicked)}
        >
          Next
        </Button>{" "}
        {isClicked && <Quizpg3 />}
      </div>
    </>
  );
};

export default Quizpg2;
