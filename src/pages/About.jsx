import {
  Card,
  CardContent,
} from "@mui/material";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { Grid } from "@mui/material";
import avatar from "../assets/avatar2.jpg";
import { DevInfo, Skills, DevWorkCount } from "../components/pages";
import { Helmet } from "react-helmet-async";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { CustomAvatar, CustomDivider } from "../components/common";

const About = ({ helmetTitle }) => {
  const theme = useTheme();

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
        <Grid container sx={{ mx: 3 }}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text="توسعه دهنده فرانت اند و یو آی یو ایکس دیزاینر"
            />
            <Grid container>
              <Grid
                item
                xs={4}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  mt: 3,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
               <DevWorkCount/>
              </Grid>
              <Grid item xs={12} sm={8} md={9} lg={9} sx={{ mb: 5 }}>
                <DevInfo/>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={0} sm={0} md={4} lg={4} xl={4} sx={{ mt: 9 }}>
            <CustomAvatar avatar={avatar} size={250} fallback="MK" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sx={{ width: 1, mt: 4 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارت های من"
            />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
