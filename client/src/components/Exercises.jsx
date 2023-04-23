import React, { useEffect, useState } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { excerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ bodyPart, setExercises, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexOfLastExercise = exercisePerPage * currentPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    let exercisesData = [];
    let apiData = [];
    const fetchExercisesData = async () => {
      apiData = await fetchData(
        "https://befitserver.vercel.app/exercises/",
        excerciseOptions
      );

      if (bodyPart === "all") {
        exercisesData = apiData;
      } else {
        exercisesData = apiData.filter((exercise) =>
          exercise.bodyPart.toLowerCase().includes(bodyPart)
        );
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

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
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={"100px"} alignItems={"center"}>
        {exercises.length > exercisePerPage && (
          <Pagination
            color={"standard"}
            shape={"rounded"}
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size={"large"}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
