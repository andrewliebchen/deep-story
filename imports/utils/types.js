import React from "react";
import UilImage from "@iconscout/react-unicons/icons/uil-image";
import UilLinkH from "@iconscout/react-unicons/icons/uil-link-h";
import UilSmileBeam from "@iconscout/react-unicons/icons/uil-smile-beam";
import UilTable from "@iconscout/react-unicons/icons/uil-table";
import UilTextFields from "@iconscout/react-unicons/icons/uil-text-fields";

export const refTypes = {
  story: {
    icon: <UilTextFields />,
    label: "Story",
  },
  table: {
    icon: <UilTable />,
    label: "Table",
  },
  image: {
    icon: <UilImage />,
    label: "Image",
  },
  link: {
    icon: <UilLinkH />,
    label: "Link",
  },
  mock: {
    icon: <UilSmileBeam />,
    label: "Mock",
  },
};
