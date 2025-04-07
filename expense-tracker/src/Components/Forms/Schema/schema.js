import * as yup from "yup";
import dayjs from "dayjs";
export const expenseValidationSchema = yup.object({
  title: yup.string().required("Title is a required field"),
  price: yup.number().required("Price is a required feild"),
  category: yup
    .string()
    .oneOf(["travel", "entertainment", "food"], "invalid category")
    .required("category required"),
  date: yup.string().required("Date is required field"),
});
export const budgetValidationSchema = yup.object({
  balance: yup.number().required("Balance Required"),
});
