import { Helmet } from "react-helmet-async";
import worldMap from "../assets/map.svg";
import { Typography, Card, CardContent, Slide } from "@mui/material";
import { Grid } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { CustomDivider } from "../components/common";
import {ContactForm} from "../components/pages";

const Contact = ({ helmetTitle }) => {
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<AccountCircle />}
          align="center"
          text="ارتباط با من"
        />
        <Grid container sx={{ mt: 5 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid item xs={12} sm={12} md={8}>
              <Card
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <ContactForm/>
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                color="text.primary"
                sx={{
                  fontFamily: "vazir",
                  mt: 4,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                بیا در مورد همه چیز با هم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                sx={{
                  fontFamily: "vazir",
                  mt: 4,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <a
                  href="mailto:aaro.se7en@gmail.com"
                  alt="email"
                  style={{
                    color: "tomato",
                  }}
                >
                  ایمیل
                </a>{" "}
                بزن به من
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
