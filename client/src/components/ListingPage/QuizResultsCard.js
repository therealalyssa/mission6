import React from 'react';
import { 
    // Button, 
    Card, 
    CardActions, 
    CardContent, 
    Typography 
} from '@mui/material';
import Quiz from "../Quiz";


const QuizResultsCard = () => {
  return (
    <div>
        <Card className="quiz-card-container" 
            elevation={1} 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // textAlign: "center",
                position: "absolute",
                width: "405px",
                height: "297px",
                paddingLeft: "75px",
                paddingTop: "188px",
                backgroundColor: "#3577A1",
                color: "#FFFFFF",
                borderRadius: "4px",
                // marginLeft: "75px"
            }}
        >
            <CardContent>
                <Typography
                    variant="h5" 
                    component="div"
                    style={{ 
                        fontWeight: "500",
                        fontSize: "27.648px",
                        lineHeight: "32px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                    > 
                    Quiz Results
                </Typography>

                <Typography>
                    Based on your answers, here are the products that we reccommend for you!
                </Typography>
                
                <CardActions>
                    {/* <Button className="redo-quiiz"
                        onClick={() => console.log('redo-quiz')}
                        type="submit" 
                        variant="contained"
                        style={{ 
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                            color:"#3752B2" 
                        }}
                    >
                    Redo Quiz
                    </Button> */}
                    <Quiz />
                
                </CardActions>
          </CardContent>
        </Card>
    </div>
  )
}

export default QuizResultsCard