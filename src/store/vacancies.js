import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "vacancies",
  initialState: {
    vacancies: [
      {
        id: 1,
        title: "FrontEnd Developer",
        company: "spark+",
        salary: "500000",
        date: "01/10/2022",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fuga porro quisquam in eveniet error maiores vitae quidem, eos repudiandae!",
      },
      {
        id: 2,
        title: "Backend Developer",
        company: "fintech",
        salary: "500000",
        date: "01/10/2022",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fuga porro quisquam in eveniet error maiores vitae quidem, eos repudiandae!",
      },
      {
        id: 3,
        title: "FullStack Developer",
        company: "fintech",
        salary: "500000",
        date: "01/10/2022",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fuga porro quisquam in eveniet error maiores vitae quidem, eos repudiandae!",
      },
    ],
  },
  reducers: {
    vacancyAdded: (state, action) => {
      state.vacancies.push({
        id: state.vacancies.length + 1,
        ...action.payload,
      });
    },
    vacancyRemove: (state, action) => {
      state.vacancies = state.vacancies.filter(
        (vacancy) => vacancy.id !== action.payload.id
      );
    },
    vacancyUpdate: (state, action) => {
      const { id, title, company, salary, date, desc } = action.payload;
      const index = state.vacancies.findIndex((vacancy) => vacancy.id === id);
      state.vacancies[index].title = title;
      state.vacancies[index].company = company;
      state.vacancies[index].salary = salary;
      state.vacancies[index].date = date;
      state.vacancies[index].desc = desc;
    },
  },
});

export const { vacancyAdded, vacancyRemove, vacancyUpdate } = slice.actions;
export default slice.reducer;
