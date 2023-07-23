import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({children}) => {
  return (
    <Typography variant="body1" color="text.primary" textAlign="left" sx={{ mt: 2 }}>
        {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "bottom", color: "primary.main" }}
      />
    </Typography>
  );
};

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : محمد کرم ویسه نژاد</Info>
            <Info>سن : 29</Info>
            <Info>شهر : سنندج</Info>
            <Info>aaro.se7en@gmail.com : آدرس ایمیل</Info>
            <Info>شماره موبایل : 09363715596</Info>
        </>
    )
}

export default DevInfo;