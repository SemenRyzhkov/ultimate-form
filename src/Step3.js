import { useForm } from "react-hook-form";
import { useData } from "./DataContext";
import { MainContainer } from "./components/MainContainer";
import { FileInput } from "./components/FileInput";
import { PButton } from "./components/PButton";
import Typography from "@mui/material/Typography";
import { Form } from "./components/Form";

export const Step3 = () => {
  //   const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    // defaultValues: {
    //   files: data.files,
    // },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PButton>Next</PButton>
      </Form>
    </MainContainer>
  );
};
