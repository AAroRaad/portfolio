import {
  Typography,
  Avatar,
  Divider,
  Box,
  Hidden,
  Tabs,
  Tab,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Grid2
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{ backgroundColor: grey[900] }}
    >
      <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
        <Hidden mdDown>
          <Avatar
            src={require("../../assets/avatar.jpg")}
            variant="rounded"
            sx={{ height: 200, width: 200, margin: "0 auto" }}
          >
            م ک
          </Avatar>
        </Hidden>
        <Typography variant="h6" color="whitesmoke">
          محمد کرم ویسه نژاد
        </Typography>

        <Typography variant="caption" color="whitesmoke">
          برنامه نویس فرانت اند
        </Typography>

        <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

        <Tabs
          orientation="vertical"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="صفحه اصلی" icon={<HomeRounded />} iconPosition="start" />
          <Tab label="دریاره من" icon={<FaceRounded />} iconPosition="start" />
          <Tab
            label="رزومه من"
            icon={<TextSnippetRounded />}
            iconPosition="start"
          />
          <Tab
            label="نمونه کارها"
            icon={<TerminalRounded />}
            iconPosition="start"
          />
          <Tab label="نظرات" icon={<MessageRounded />} iconPosition="start" />
          <Tab
            label="ارتباط با من"
            icon={<ConnectWithoutContactRounded />}
            iconPosition="start"
          />
        </Tabs>
        <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            height: 100,
          }}
        >
          <Typography variant="subtitle2" color="whitesmoke">
            طراحی شده با{" "}
            <FavoriteRounded
              sx={{
                verticalAlign: "middle",
                color: "tomato",
                height: 20,
              }}
            />
          </Typography>{" "}
          <Typography variant="caption" color="whitesmoke" sx={{ mt: 3 }}>
            کپی رایت 1402{" "}
            <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
          </Typography>
        </Box>
      </Box>
    </Grid2>
  );
};

export default Sidebar;

// {/* <Tab label={
//   <div>
//     <Typography variant="subtitle2" color='white'>
//     <HomeRounded sx={{verticalAlign: 'middle', mx: 1}} />
//       خانه

//     </Typography>
//   </div>
// }

// /> */}
