import React from "react";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import UilFileUpload from "@iconscout/react-unicons/icons/uil-file-upload";
import UilGrid from "@iconscout/react-unicons/icons/uil-grid";
import UilHeadSide from "@iconscout/react-unicons/icons/uil-head-side";
import UilTextFields from "@iconscout/react-unicons/icons/uil-text-fields";

export const refTypes = {
  text: {
    active: true,
    icon: <UilTextFields />,
    label: "Text",
    color: "#0077CC",
  },
  mock: {
    active: true,
    icon: <UilHeadSide />,
    label: "Mock",
    color: "#C48208",
  },
  resource: {
    active: true,
    icon: <UilFileUpload />,
    label: "Resource",
    color: "#9b64bf",
  },
  table: {
    active: false,
    icon: <UilGrid />,
    label: "Table",
    color: "#15796E",
  },
  tasks: {
    active: true,
    icon: <UilCheckCircle />,
    label: "Tasks",
    color: "#fe714a",
  },
};

export const refTypeLabels = ["all", ...Object.keys(refTypes)];
