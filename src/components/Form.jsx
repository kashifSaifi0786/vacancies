import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { vacancyAdded, vacancyUpdate } from "../store/vacancies";
import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Form = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("0");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const vacancies = useSelector((state) => state.vacancies);

  useEffect(() => {
    if (id === "new") {
      return;
    } else {
      const vacancy = vacancies.filter((vac) => vac.id === parseInt(id));
      if (!vacancy.length) return;
      const { title, company, salary, date, desc } = vacancy[0];
      setTitle(title);
      setCompany(company);
      setSalary(salary);
      setDate(date);
      setDesc(desc);
    }
  }, [id, vacancies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "new") {
      dispatch(
        vacancyAdded({
          title,
          company,
          salary,
          date,
          desc,
        })
      );
    } else {
      dispatch(
        vacancyUpdate({
          id: parseInt(id),
          title,
          company,
          salary,
          date,
          desc,
        })
      );
    }

    navigate("/");
  };

  return (
    <Box
      sx={{
        width: 400,
        m: "auto",
        border: "1px solid lightgray",
        borderRadius: 1,
        p: 2,
      }}
    >
      <Box sx={{ textAlign: "center", my: 1 }}>Add Job</Box>
      <FormControl
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Job Title"
        />
        <TextField
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          label="Company Name"
        />
        <TextField
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          type="number"
          label="Salary"
        />
        <TextField
          value={date}
          onChange={(e) => setDate(e.target.value)}
          label="Date"
        />
        <TextField
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          label="Description"
          multiline
          rows={4}
        />
        <Box sx={{ textAlign: "center" }}>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Form;
