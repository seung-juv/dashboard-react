import { faHome, faProjectDiagram, faCog } from "@fortawesome/free-solid-svg-icons";

export default [
  {
    itemProps: {
      name: "Dashboard",
      url: "/",
      icon: faHome
    }
  },
  {
    itemProps: {
      name: "Projects",
      url: "/projects",
      icon: faProjectDiagram
    },
    subItemProps: [
      {
        name: "List",
        url: "/projects/list"
      },
      {
        name: "Details",
        url: "/projects/details"
      }
    ]
  },
  {
    itemProps: {
      name: "Settings",
      url: "/settings",
      icon: faCog
    },
    subItemProps: [
      {
        name: "Settings",
        url: "/settings/settings"
      },
      {
        name: "Profile",
        url: "/settings/profile"
      },
      {
        name: "Infomation",
        url: "/settings/infomation"
      }
    ]
  }
];
