import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";

import { useEffect, useState } from "react";
import {grey} from "@mui/material/colors";
import {useTheme} from "@mui/material/styles";
import {CustomDivider} from "../components/common";
import {ShowCourses} from "../components/pages";

const Courses = ({ helmetTitle }) => {
    const theme = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <Card
      sx={{
        direction: "rtl",
        height: "100vh",
        backgroundColor: theme.palette.mode === 'dark' ? grey[900] : grey[200],
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
          <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="دوره های من"
          />
        <Grid container sx={{ mx: 3, mt: 3 }}>
         <ShowCourses loading={loading}/>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Courses;
