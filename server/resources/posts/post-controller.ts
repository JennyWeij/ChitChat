import * as yup from "yup";
// YUP shema
// _id title author content createdAt to string strickt

const validationSchema = yup.object().shape({
  //   username: yup.string().required().min(3).strict(),
  //   password: yup.string().required().min(6).strict(),
  _id: yup.string().required().min(5).strict(),
  title: yup.string().required().min(1).strict(),
  author: yup.string().required().min(3).strict(),
  content: yup.string().required().min(1).strict(),
  createdAt: yup.string().required().min(0).strict(),
});

// SCHEMA FÖR POST
const postSchema = yup.object({
  title: yup.string().required().max(40).strict(),
  content: yup.string().required().max(125).strict(),
});
