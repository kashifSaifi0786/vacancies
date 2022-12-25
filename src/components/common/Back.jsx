import React from "react";
import { Divider } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <>
      <Divider sx={{ mt: 3, mb: 2 }} />
      <Link to="/">
        <ArrowBack sx={{ ml: 10, cursor: "pointer", color: "black" }} />
      </Link>
      <Divider sx={{ mt: 2, mb: 3 }} />
    </>
  );
};

export default Back;
