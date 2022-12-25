import React from "react";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Review = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { title, company, salary, date, desc } = useSelector(
    (state) =>
      state.vacancies.filter((vacancy) => vacancy.id === parseInt(id))[0]
  );

  return (
    <Box
      sx={{
        width: 400,
        m: "auto",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <span className="desc">Job Title</span>
      <h4>{title}</h4>
      <span className="desc">Company</span>
      <h4>{company}</h4>
      <span className="desc">Description</span>
      <h4>{desc}</h4>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <span className="desc">salary</span>
          <h4>{salary}/m</h4>
        </Box>
        <Box>
          <span className="desc">Joining Date</span>
          <h4>{date}</h4>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
