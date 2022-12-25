import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Divider } from "@mui/material";
import Vacancy from "./Vacancy";
import { Link } from "react-router-dom";

function Main() {
  const vacancies = useSelector((state) => state.vacancies);

  return (
    <>
      <Divider sx={{ mt: 8, mb: 4 }} />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 800,
          mx: "auto",
        }}
      >
        <Link to={"/form/new"}>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "-80px",
              right: { xs: 20, md: 50, lg: 50 },
            }}
          >
            Add
          </Button>
        </Link>

        {vacancies.map((vacancy) => (
          <Vacancy
            key={vacancy.id}
            id={vacancy.id}
            title={vacancy.title}
            company={vacancy.company}
            salary={vacancy.salary}
            date={vacancy.date}
            desc={vacancy.desc}
          />
        ))}
      </Box>
    </>
  );
}

export default Main;
