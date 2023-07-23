import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded, SchoolRounded,
    TextSnippetRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tab panel-${index}`,
    };
};

export const tabsData = () => {
    return [
        {label: "صفحه اصلی", icon: <HomeRounded/>, ...tabProps(0)},
        {label: "درباره من", icon: <FaceRounded/>, ...tabProps(1)},
        {label: "رزومه من", icon: <TextSnippetRounded/>, ...tabProps(2)},
        {label: "دوره های من", icon: <SchoolRounded/>, ...tabProps(3)},
        {label: "نظرات", icon: <MessageRounded/>, ...tabProps(4)},
        {
            label: "ارتباط با من",
            icon: <ConnectWithoutContactRounded/>,
            ...tabProps(5),
        },
    ];
};


// export const tabsData = () => {
//     const tabs = [
//         { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
//         { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
//         { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
//         { label: "نمونه کارها", icon: <TerminalRounded />, ...tabProps(3) },
//         { label: "نظرات", icon: <MessageRounded />, ...tabProps(4) },
//         {
//             label: "ارتباط با من",
//             icon: <ConnectWithoutContactRounded />,
//             ...tabProps(5),
//         },
//     ];
//
//     return tabs;
// };
