import { Formik, Form } from "formik";
import { DataContext } from "../Wallet/WalletContext";
import { CustomTextField } from "./FormElements";
import { useContext, useCallback } from "react";
import StyledButton from "../Styled/Button";
import { budgetValidationSchema } from "./Schema/schema";
import { ADD_BALANCE } from "../Wallet/WalletConstants";
export default function BudgetForm() {
  const { setBalance, updateModalState } = useContext(DataContext);
  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }) => {
      const { balance } = values;
      const currBalance = JSON.parse(window.localStorage.getItem("balance"));
      setBalance(() => currBalance + balance);
      setSubmitting(false);
      resetForm();
    },
    [setBalance],
  );
  return (
    <Formik
      initialValues={{ balance: "" }}
      validationSchema={budgetValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="budgetForm">
        <CustomTextField
          name="balance"
          label="Income Amount"
          placeholder="Income Amount"
          type="number"
          varaint="outlined"
        />
        <StyledButton type="submit" variant="warning" size="small">
          Add Balance
        </StyledButton>
        <StyledButton
          size="small"
          type="button"
          onClick={() =>
            updateModalState({ modalOps: "close", target: ADD_BALANCE })
          }
        >
          Cancel
        </StyledButton>
      </Form>
    </Formik>
  );
}
