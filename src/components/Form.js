import { Card, CardContent } from "@mui/material";

export const Form = ({ children, ...props }) => {
  return (
    <Card
      sx={{
        width: "100%",
        // marginTop: spacing(1)
      }}
    >
      <CardContent>
        <form {...props} noValidate>
          {children}
        </form>
      </CardContent>
    </Card>
  );
};
