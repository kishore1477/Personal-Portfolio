import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import { Grey } from "../utils/constants";
import GradientBox from "./GradientBox";
import MotionLayout from "./MotionLayout";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
const Contact = () => {
  return (
    <MotionLayout>
      <Stack id="Contact"   direction={{ xs: "column", md: "row" }} gap={4} mt={4} pt={{ xs: 10, md: 20 }}>
     
        <Box pt={{ xs: 15, md: 5 }} width={{ xs: "100%", md: "60%" }}>
          <Typography variant="h3" fontWeight="bold">
          Reach Out to me!
          </Typography>
          <Typography fontSize={16} color={Grey}>
       Looking for Frontend  | React JS | MERN Stack |  Django Developer Role
          
          </Typography>
          <Box display="flex" gap={4} mt={2}>
        <a
          href="https://www.linkedin.com/in/kishore-kumar-jaipal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            sx={{
              color: "#0277b5",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            size = {80}
          />
        </a>
        <a
          href="https://github.com/kishore1477"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            sx={{
              color: "#0277b5",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </a>
        <a href="mailto:kishorekumar27134@gmail.com">
        {/* <a href="mailto:syomna444@gmail.com"> */}
          <MailIcon
            sx={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </a>
      
      </Box>
         
        </Box>
        <Box pt={{ xs: 10, md: 5 }} height="20vh" width={{ xs: "100%", md: "40%", }}  sx={{justifyContent:"center", display:"flex", alignItems:"center"}} >
        <Box 
         component="img"
  sx = {{
    borderRadius:"50%",
    height:"40vh",
    width:"40vw"
  }}
  alt="my image."
  src="/k2.jpg"
        
        >
          {/* <Robot /> */}
          
        </Box>
        </Box>
      

    
       
      </Stack>
    </MotionLayout>
  )
}

export default Contact