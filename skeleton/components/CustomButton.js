import { Button } from "@mui/material";

const CustomButton = (props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "30px",
        padding: "10px 20px",
        fontWeight: "bold",
        textTransform: "none",
        boxShadow: "none",
        ...props.sx,
      }}
      {...props}
    />
  );
};

export default CustomButton;
