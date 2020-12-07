import React from "react";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import UilFileUpload from "@iconscout/react-unicons/icons/uil-file-upload";
import UilGrid from "@iconscout/react-unicons/icons/uil-grid";
import UilHeadSide from "@iconscout/react-unicons/icons/uil-head-side";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";

export const refTypes = {
  text: {
    icon: <UilPen />,
    label: "Story",
  },
  resource: {
    icon: <UilFileUpload />,
    label: "Resource",
  },
  mock: {
    icon: <UilHeadSide />,
    label: "Mock",
  },
  table: {
    icon: <UilGrid />,
    label: "Table",
  },
  tasks: {
    icon: <UilCheckCircle />,
    label: "Tasks",
  },
};
