import { faHome, faProjectDiagram, faCog } from "@fortawesome/free-solid-svg-icons";

export default [
  {
    itemProps: {
      name: "Dashboards",
      url: "/",
      icon: faHome
    }
  },
  {
    itemProps: {
      name: "Projects",
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
      icon: faCog
    },
    subItemProps: [
      {
        name: "Settings",
        url: "/settings/settings"
      },
      {
        name: "Infomation",
        url: "/settings/infomation"
      }
    ]
  }
];
