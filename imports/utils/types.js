import React from "react";
import { CheckCircle, Globe, Database, Users, Type } from "react-feather";

export const refTypes = {
  text: {
    active: true,
    icon: <Type />,
    label: "Text",
    color: "#0077CC",
  },
  mock: {
    active: true,
    icon: <Users />,
    label: "Mock",
    color: "#C48208",
  },
  resource: {
    active: true,
    icon: <Globe />,
    label: "Resource",
    color: "#9b64bf",
  },
  table: {
    active: false,
    icon: <Database />,
    label: "Table",
    color: "#15796E",
  },
  tasks: {
    active: true,
    icon: <CheckCircle />,
    label: "Tasks",
    color: "#fe714a",
  },
};

export const refTypeLabels = ["all", ...Object.keys(refTypes)];
