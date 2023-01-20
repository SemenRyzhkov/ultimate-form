import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "./DataContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { PButton } from "./components/PButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

export const Step2 = () => {
  const { setValues, data } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const history = useNavigate();

  const onSubmit = (data) => {
    history("/result");
    setValues(data);
  };

  const hasPhone = watch("hasPhone");

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          {...register("email")}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              {...register("hasPhone")}
              name="hasPhone"
            />
          }
          label="Do you have a phone"
        />
        {hasPhone && (
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            label="Phone Number"
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
            {...register("phoneNumber")}
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PButton>Next</PButton>
      </Form>
    </MainContainer>
  );
};
