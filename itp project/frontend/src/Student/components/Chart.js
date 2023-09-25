import React from 'react'
import {Grid, Box, Typography} from '@mui/material'

export default function Chart() {
  return (
    <div>
        <Grid container>
      <Grid item >
        <Box
          sx={{
            bgcolor: "#209292",
            width: "650px",
            height: "650px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
            boxSizing: "border-box",
            borderRadius: "25px",
            textAlign: "center",
            ml: "300px",
            mt: "50px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontFamily: "Arvo",
              fontWeight: "bold",
              mt: "18px",
            }}
          >
            Students
            <Typography
  sx={{
    fontSize: "20px",
    color: "white",
    fontFamily: "Arvo",
    fontWeight: "bold",
    mt: "18px",
  }}
>
  
  <iframe
    style={{
      background: "#FFFFFF",
      border: "none",
      borderRadius: "2px",
      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    }}
    width="640"
    height="480"
    src="https://charts.mongodb.com/charts-merncrud-bsfjq/embed/charts?id=6463c157-c007-470a-8e47-9aa5fbfb7bd9&maxDataAge=60&theme=light&autoRefresh=true"
  ></iframe>
</Typography>

           
          </Typography>
        </Box>
      </Grid>
<Grid item>
        <Box
          sx={{
            bgcolor: "#105949",
            width: "200px",
            height: "200px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
            boxSizing: "border-box",
            borderRadius: "25px",
            textAlign: "center",
            ml: "85px",
            mt: "50px",
          }}
        >
          <Typography
  sx={{
    fontSize: "20px",
    color: "white",
    fontFamily: "Arvo",
    fontWeight: "bold",
    mt: "18px",
  }}
>
  No of Students
  <iframe
    style={{
      background: "#FFFFFF",
      border: "none",
      borderRadius: "2px",
      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    }}
    width="640"
    height="480"
    src="https://charts.mongodb.com/charts-merncrud-bsfjq/embed/charts?id=6463c562-36b3-4a62-8f6f-adc5fc2cbefb&maxDataAge=60&theme=light&autoRefresh=true"
  ></iframe>
</Typography>



        </Box>
      </Grid>
</Grid>
    </div>
  )
}
