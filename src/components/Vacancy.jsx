import React from "react";
import { Box } from "@mui/system";
import Dots from "./common/Dots";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Vacancy = ({ id, title, company, salary, date, desc }) => {
  return (
    <Box
      sx={{
        py: 1,
        px: 2,
        m: 2,
        width: { xs: "100%", md: 350, lg: 350 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "1px solid lightgray",
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h4>{title}</h4>
        <Dots id={id} />
      </Box>
      <Link to={`/review/${id}`}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRqpHhFRi9YByn9Vq-coUp_hx6g7Gabu6oQ&usqp=CAU"
              sx={{ width: 30, height: 30, mr: 1 }}
            />
            {company}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h5>salary: {salary}/m</h5>
            <h5>Joining Date: {date}</h5>
          </Box>
          <Box sx={{ width: "100%" }}>{desc}</Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Vacancy;
