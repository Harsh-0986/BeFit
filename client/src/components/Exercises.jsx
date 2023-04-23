import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ bodyPart, setExcercises, exercises }) => {
  return (
    <Box
      mt={"50px"}
      sx={{
        mt: { lg: "110px" },
      }}
      p={"20px"}
    >
      <Typography variant={"h3"} mb={"46px"}>
        Showing results
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
