import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import MainContext from "../../context/index";
import { useContext } from "react";
import {tabsData} from "../../constants/tabsData";
import {useTheme} from "@mui/material/styles";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const theme = useTheme();
  const data = tabsData();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      textColor={theme.palette.mode === 'dark' ? 'secondary' : 'primary'}
      indicatorColor={theme.palette.mode === 'dark' ? 'secondary' : 'primary'}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              backgroundColor: theme.palette.mode === 'dark' ? grey[800] : grey[500],
              borderRadius: 2,
              my: 0.5,
              mx: 1,
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
