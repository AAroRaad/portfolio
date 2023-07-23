import { Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import avatar from "../../assets/avatar.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";
import { useState } from "react";
import SocialMediaIcons from "../SocialMediaIcons";
import ThemeActionButton from "../ThemeActionButton";
import {CustomAvatar} from "../common";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <ThemeActionButton />
        <CustomAvatar
            avatar={avatar}
            size={200}
            fallback='MK'
        />
      <Typography variant="h6" color="#1976d2">
        <Typography variant="caption" color="tomato">
          {" {{ "}
        </Typography>
        <RandomReveal
          isPlaying
          characters="محمد کرم ویسه نژاد"
          characterSet={alphabetPersian}
          duration={3}
          onComplete={() => setStart(true)}
        />
        <Typography variant="caption" color="tomato">
          {" }} "}
        </Typography>
      </Typography>

      {start && (
        <Typography variant="caption" color="gray">
          <Typography variant="caption" color="tomato">
            [[{" "}
          </Typography>
          <RandomReveal
            isPlaying
            characters="برنامه نویس فرانت اند"
            characterSet={alphabetPersian}
            duration={5}
          />
          <Typography variant="caption" color="tomato">
            {" "}
            ]]
          </Typography>
        </Typography>
      )}
        <SocialMediaIcons/>
    </>
  );
};

export default SidebarHeader;
