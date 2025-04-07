import React from "react";
import { Formik, Form } from "formik";
import { CustomTextField, CustomCategory, CustomDate } from "./FormElements";
import { useCallback, useContext } from "react";
import { DataContext } from "../Wallet/WalletContext";
import { ADD_EXPENSE } from "../Wallet/WalletConstants";
import StyledButton from "../Styled/Button";
import dayjs from "dayjs";
import { expenseValidationSchema } from "./Schema/schema";
import { useSnackbar } from "notistack";
import { Grid } from "@mui/material";

const ExpenseForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { setExpense, setBalance, updateModalState } = useContext(DataContext);
  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }) => {
      const { category, price } = values;

      if (window.localStorage.getItem("balance") - price < 0) {
        enqueueSnackbar({ message: "insufficient balance", variant: "info" });
        return;
      }
      setExpense((prevExpense) => {
        return {
          ...prevExpense,
          [category]: [...prevExpense[category], values],
          [`${category}Total`]: prevExpense[`${category}Total`] + price,
          total: prevExpense["total"] + price,
        };
      });
      setBalance((prevBal) => prevBal - price);
      setSubmitting(false);
      resetForm();
    },
    [setExpense, setBalance],
  );
  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        category: "",
        date: dayjs().format("YYYY-MM-DD"),
      }}
      validationSchema={expenseValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTextField
              name="title"
              label="Title"
              type="text"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTextField
              name="price"
              label="Price"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomCategory
              name="category"
              label="Select Categroy"
              variant="outlined"
              size="small"
            >
              <option value="travel">Travel</option>
              <option value="entertainment">Entertainment</option>
              <option value="food">Food</option>
            </CustomCategory>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomDate type="date" label="dd-mm-yy" name="date" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <StyledButton
              sx={{ width: "100%" }}
              type="submit"
              variant="warning"
              size="small"
            >
              Add Expense
            </StyledButton>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <StyledButton
              size="small"
              type="button"
              sx={{ width: "100%" }}
              onClick={() =>
                updateModalState({ modalOps: "close", target: ADD_EXPENSE })
              }
            >
              Cancel
            </StyledButton>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};
export default React.memo(ExpenseForm);
