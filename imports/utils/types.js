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
    color: "#ECA400",
  },
  resource: {
    active: false,
    icon: <UilFileUpload />,
    label: "Resource",
    color: "#540D6E",
  },
  table: {
    active: false,
    icon: <UilGrid />,
    label: "Table",
    color: "#15796E",
  },
  tasks: {
    active: false,
    icon: <UilCheckCircle />,
    label: "Tasks",
    color: "#9A275A",
  },
};

export const mockTypes = {
  person: {
    type: "object",
    label: "Person",
    additionalProperties: false,
    properties: {
      name: {
        type: "string",
        faker: "name.findName",
      },
      email: {
        type: "string",
        format: "email",
        faker: "internet.email",
      },
      image: {
        type: "string",
        format: "uri",
        faker: "image.avatar",
      },
    },
  },
  transaction: {
    type: "object",
    label: "Transaction",
    additionalProperties: false,
    properties: {
      amount: {
        type: "number",
        faker: "finance.amount",
      },
      date: {
        type: "string",
        faker: "date.past",
        format: "date-time",
      },
      business: {
        type: "string",
        fake: "company.companyName",
      },
    },
  },
};
