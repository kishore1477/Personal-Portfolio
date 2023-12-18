import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Grey, Projectss, otherProjects } from "../utils/constants";
import GradientBox from "./GradientBox";
import MotionLayout from "./MotionLayout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const Projects = () => {
  const cellStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  };
  return (
    <MotionLayout>
      <Stack pt={10} id="Projects">
        <Typography fontWeight="bold" variant="h4">
          Projects
        </Typography>
        <Typography
          mt={2}
          fontSize={14}
          color={Grey}
          width={{ xs: "100%", md: "60%" }}
        >
          Explore my projects – from frontend to backend and beyond –
          showcasing my passion for innovation and problem-solving. Get a
          glimpse of my skills and expertise in the tech world,
        </Typography>
        <Stack gap={4}>
          {Projectss.map((p, index) => (
            <MotionLayout key={p.title}>
              {index === 0 && (
                <Typography textAlign="center" variant="h4" my={4}>
                  Web Apps
                </Typography>
              )}
              {/* {index === 3 && (
                <Typography textAlign="center" variant="h4" my={4}>
                  Mobile Apps
                </Typography>
              )} */}
              <Stack
                key={p.title}
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                gap={4}
              >
                <Box
                  component="img"
                  src={p.img}
                  alt={p.title}
                  width={{ xs: "100%", md: "40%" }}
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 0 0 2px #e96cb8, 0 0 0 2px #8167f8",
                  }}
                />
                <Box>
                  <Typography fontSize={18} fontWeight="bold">
                    {p.title}
                  </Typography>
                  <Typography fontSize={12} color={Grey}>
                    {p.subTitle}
                  </Typography>
                  <Stack mt={1} direction="row" gap={1}>
                    <Typography fontSize={14}>Technologies:</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {p.tech.map((t) => (
                        <Typography key={t.name} fontSize={12} color={t.color}>
                          {t.name}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>

                  <Stack mt={2} direction="row" gap={2}>
                   
                      {p.github && (
                         <GradientBox
                         customStyle={{ width: { xs: "40%", md: "25%" }, py: 1 }}
                       >
 <a
 href={p.github}
 target="_blank"
 rel="noopener noreferrer"
>
 <Stack direction="row" alignItems="center" gap={1}>
 <GitHubIcon sx={{ fontSize: 20, color: "white" }} />
   <Typography fontSize={12}>
   GitHub
     {/* {p.isApp ? "Google Play" : "GitHub"} */}
   </Typography>
 </Stack>
</a>
                      </GradientBox> )}
                     
                  
                    <GradientBox
                      customStyle={{ width: { xs: "40%", md: "25%" }, py: 1 }}
                    >
                      <a
                        href={p.isApp ? p.appStore : p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Stack direction="row" alignItems="center" gap={1}>
                          {p.isApp ? (
                            <AppleIcon sx={{ fontSize: 20, color: "white" }} />
                          ) : (
                            <LinkIcon sx={{ fontSize: 20, color: "white" }} />
                          )}
                          <Typography fontSize={12}>
                            {p.isApp ? "App Store" : "Demo"}
                          </Typography>
                        </Stack>
                      </a>
                    </GradientBox>
                  </Stack>
                </Box>
              </Stack>
            </MotionLayout>
          ))}
        </Stack>
        <Stack>
        <Typography textAlign="center" variant="h4" my={4}>
                  Other Projects
                </Typography>
        <table style={{ borderCollapse: 'collapse', width: '100%', color:"white" }}>
  <thead>
    <tr>
      <th style={cellStyle}>S#</th>
      <th style={cellStyle}>Name</th>
      <th style={cellStyle}>Github</th>
      <th style={cellStyle}>Demo</th>
    </tr>
   </thead>
   <tbody>
   {otherProjects?.map((p,i)=>{
            return    <tr key={i}>
            <td style={cellStyle}>{i+1}</td>
            <td style={cellStyle}>{p?.name}</td>
            <td style={cellStyle}>
            <a
 href={p.gitUrl}
 target="_blank"
 rel="noopener noreferrer"
>
            <GitHubIcon sx={{ fontSize: 20, color: "white" }} />

</a>
            </td>
            <td style={cellStyle}>
            <a
 href={p.url}
 target="_blank"
 rel="noopener noreferrer"
>
            <LinkIcon sx={{ fontSize: 20, color: "white", cursor:"pointer" }} />
            </a>
            </td>
          </tr>

          })}
    
    
    
  </tbody>
</table>
         
        </Stack>
      </Stack>
    </MotionLayout>
  );
};

export default Projects;
