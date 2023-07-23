import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
// import Particles from "react-particles";
// import {loadFull}  from "tsparticles";
import TextTransition, { presets } from "react-text-transition";

import bg01 from "../assets/bg1.jpg";
import {useEffect, useRef, useState} from "react";
// import { firefly, links } from "../constants/particles";
import { Helmet } from "react-helmet-async";

const Home = ({helmetTitle}) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const strings = [
    "توسعه دهنده فرانت اند هستم",
    "یوآی یوایکس دیزاینر هستم",
    "فریلنسر هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: [" محمد کرم ویسه نژاد "],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 10,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 2000);

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);
  //
  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg01})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>


      <Box component="div" sx={{ display: "flex" }}>
        {/*<Particles*/}
        {/*  id="tsparticles"*/}
        {/*  init={particlesInit}*/}
        {/*  loaded={particlesLoaded}*/}
        {/*  options={links}*/}
        {/*/>*/}
        <Typography variant="h3" color="#1976d2">
          {"{{"}
        </Typography>
        <Typography ref={nameEl} variant="h3" color="tomato" />
        <Typography variant="h3" color="#1976d2">
          {"}}"}
        </Typography>
      </Box>
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h4" color="whitesmoke" sx={{ mt: 4, mr: 1 }}>
          من یک
        </Typography>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#1976d2",
              mt: 4,
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
      </Box>
    </Box>
  );
};

export default Home;
