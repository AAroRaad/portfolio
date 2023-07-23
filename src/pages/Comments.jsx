import { Helmet } from "react-helmet-async";
import {  Card, CardContent } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { CustomDivider } from "../components/common";
import {CommentsSlider} from "../components/pages";

const Comments = ({ helmetTitle }) => {
  const theme = useTheme();

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
          bColor="success.main"
          cColor="success"
          icon={<ForumRounded />}
          align="center"
          text="نظرات دانشجویان دوره های من"
        />
      <CommentsSlider/>
      </CardContent>
    </Card>
  );
};

export default Comments;
