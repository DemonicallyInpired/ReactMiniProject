import { TextField, Box } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export const CustomTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      helperText={meta.touched && meta.error ? meta.error : ""}
      error={Boolean(meta.touched && meta.error)}
      label={label}
      {...props}
      {...field}
    />
  );
};
export const CustomCategory = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      select
      slotProps={{
        select: {
          native: true,
        },
      }}
      label={label}
      helperText={meta.touched && meta.error ? meta.error : ""}
      error={Boolean(meta.touched && meta.error)}
      {...props}
      {...field}
    >
      {[...children].map((item) => (
        <option key={item.props.value} value={item.props.value}>
          {item.props.value}
        </option>
      ))}
    </TextField>
  );
};

export const CustomDate = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box id="date-picker">
        <DatePicker
          label={label}
          value={field.value ? dayjs(field.value) : null}
          onChange={(val) => {
            const formatted = val ? val.format("YYYY-MM-DD") : "";
            setFieldValue(field.name, formatted);
          }}
          slotProps={{
            textField: {
              error: Boolean(meta.touched && meta.error),
              helperText: meta.touched && meta.error ? meta.error : "",
            },
          }}
          {...props}
        />
      </Box>
    </LocalizationProvider>
  );
};
