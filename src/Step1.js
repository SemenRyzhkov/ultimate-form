import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PButton } from "./components/PButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

export const Step1 = () => {
  const { setValues, data } = useData();
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    history("/step2");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
          {...register("firstName")}
        />
        <Input
          id="lasttName"
          name="lastName"
          type="text"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          {...register("lastName")}
        />
        <PButton>Next</PButton>
      </Form>
    </MainContainer>
  );
};
