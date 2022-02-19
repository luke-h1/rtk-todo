import * as yup from "yup";

const createTodoSchema = yup.object({
  text: yup.string().required(),
  completed: yup.boolean().required(),
});
export default createTodoSchema;
