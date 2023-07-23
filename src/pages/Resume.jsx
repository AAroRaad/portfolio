import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { CustomDivider } from "../components/common";
import {DevExpTimeline, DevEduTimeline} from "../components/pages";
import {useEffect, useState} from "react";

const Resume = ({ helmetTitle }) => {
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
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="error.main"
          cColor="error"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="رزومه من"
        />
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات"
            />
            <DevExpTimeline loading={loading} />
          </Grid>
          <Grid xs={6}>
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات"
            />
            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
