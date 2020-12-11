import React from "react";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import UilFileUpload from "@iconscout/react-unicons/icons/uil-file-upload";
import UilGrid from "@iconscout/react-unicons/icons/uil-grid";
import UilHeadSide from "@iconscout/react-unicons/icons/uil-head-side";
import UilTextFields from "@iconscout/react-unicons/icons/uil-text-fields";

export const refTypes = [
  {
    active: true,
    icon: <UilTextFields />,
    label: "Text",
    stub: "text",
  },
  {
    active: true,
    icon: <UilHeadSide />,
    label: "Mock",
    stub: "mock",
  },
  {
    active: false,
    icon: <UilFileUpload />,
    label: "Resource",
    stub: "resource",
  },
  {
    active: false,
    icon: <UilGrid />,
    label: "Table",
    stub: "table",
  },
  {
    active: false,
    icon: <UilCheckCircle />,
    label: "Tasks",
    stub: "tasks",
  },
];
