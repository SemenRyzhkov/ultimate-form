import { Button } from "@mui/material";

export const PButton = ({ children, ...props }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant={"outlined"}
      // sx={{
      //   bgcolor: "#fff",
      //   boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
      //   "&:hover": {
      //     bgcolor: "#fff",
      //     color: "#000",
      //   },
      // }}
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};
