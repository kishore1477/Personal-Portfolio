import {Box, Stack, Typography } from "@mui/material";
import React from "react";
import MotionLayout from "./MotionLayout";
import { Grey, Education } from "../utils/constants";
import GradientBox from "./GradientBox";
const About = () => {
  return (
    <>
     <MotionLayout >
      <Stack pt={15} id="About" width={{xs: "100%" , md: "60%"}}>
        <Typography variant="h4" fontWeight="bold">About me</Typography>
        <Typography pt={2} color={Grey}>
        Full Stack Developer with 1+ year of experience in corporate web development environments. Proficient in JavaScript* and Python, with a strong focus on ES6+ and data structures. Adept at ReactJS*, ExpressJS,NodeJS Django and MongoDB. Self-driven, continuously learning, and academically accomplished with a 2.5 million PKR scholarship. ❤❤
        </Typography>
      </Stack>
      <Stack  >
        <Typography mt={4} fontWeight="bold" variant="h4">
          Education 
        </Typography>
        <Stack mt={4} gap={2} width={{ xs: "100%", md: "80%" }} height={{xs:"100%"}}>
          {Education.map((ex) => (
            <Stack key={ex.title} direction="row" gap={2}>
              <Box>
                <GradientBox
                  customStyle={{ height: 15, width: 15, mt: 2 }}
                  borderRadius="50%"
                />
                <Box
                  sx={{
                    borderRight: "2px solid #ccc", // Add a right border to create the divider effect
                    height: { xs: "4rem", md: "4rem" },
                    width: "6px",
                    mt: 0.5,
                  }}
                />
              </Box>
              <Box
                p={2}
                sx={{ borderRadius: 2, backgroundColor: "rgba(0,0,0, 0.2)" }}
              >
                <Typography>{ex.title}</Typography>
                <Typography fontSize={12} color={Grey}>{ex.date}</Typography>
                <Typography fontSize={12} color={Grey}>{ex.major}</Typography>
                <Typography fontSize={12} color={Grey}>
                  {ex.place}
                </Typography>
               
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </MotionLayout>
    
    
    
   
    
    </>
   
  );
};

export default About;
