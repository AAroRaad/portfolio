import MainLayout from "../layouts/MainLayout";
import PagesContainer from "./PagesContainer";
import { Sidebar } from "../components/sidebar";
import { useEffect, useState } from "react";
import {Page} from "../components/pages";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context/index";
import { DrawerActionButton } from "../components/drawer";

import { Home, About, Resume, Courses, Comments, Contact } from "../pages";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <Page value={pageNumber} index={0}>
            <Home helmetTitle="وبسایت شخصی محمد کرم ویسه نژاد" />
          </Page>
          <Page value={pageNumber} index={1}>
            <About helmetTitle="وبسایت شخصی | درباره من" />
          </Page>
          <Page value={pageNumber} index={2}>
            <Resume helmetTitle="وبسایت شخصی | رزومه من" />
          </Page>
          <Page value={pageNumber} index={3}>
            <Courses helmetTitle="وبسایت شخصی | دوره های من" />
          </Page>
          <Page value={pageNumber} index={4}>
            <Comments helmetTitle="وبسیات شخصی | نظرات" />
          </Page>
          <Page value={pageNumber} index={5}>
           <Contact helmetTitle="وبسیات شخصی | ارتباط با من" />
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
