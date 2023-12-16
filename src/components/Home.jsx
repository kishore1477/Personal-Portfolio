import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey } from "../utils/constants";
import GradientBox from "./GradientBox";
import MotionLayout from "./MotionLayout";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import Robot from "./Robot";
import cv from "../assets/Kishore-fullStack-Developer.pdf";
const Home = () => {
  return (
    <MotionLayout>
      <Stack direction={{ xs: "column", md: "row" }} id="Home">
        <Box pt={{ xs: 15, md: 20 }} width={{ xs: "100%", md: "60%" }}>
          <Typography variant="h3" fontWeight="bold">
            Hi there, I'm <span style={{ color: "#d2b9f0" }}>Kishore Kumar </span>
          </Typography>
          <Typography fontSize={16} color={Grey}>
          Full  Stack Developer | specialize in Frontend Web Development
          
          </Typography>
          <Box display="flex" gap={2} mt={2}>
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
          <GradientBox
            customStyle={{ width: { xs: "80%", md: "40%" }, py: 2, mt: 2 }}
          >
            <Box
              onClick={() => {
                const fileName = "Kishore-fullStack-Developer.pdf";
                const filePath = cv;
                const link = document.createElement("a");
                link.setAttribute("download", fileName);
                link.setAttribute("href", filePath);
                link.click();
              }}
            >
              {" "}
              <Typography fontSize={14}>Download My Resume</Typography>
            </Box>
          </GradientBox>
        </Box>
        <Box height="60vh" width={{ xs: "100%", md: "40%" }}>
          <Robot />
        </Box>
      </Stack>
    </MotionLayout>
  );
};

export default Home;
