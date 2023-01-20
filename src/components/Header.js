import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <Typography
      sx={{
        // fontFamily: "Permanent Marker",
        // margin: spacing(3, 0, 2),
        textAlign: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkmagenta",
      }}
      component="h1"
      variant="h5"
    >
      Ultimate Form
    </Typography>
  );
};
