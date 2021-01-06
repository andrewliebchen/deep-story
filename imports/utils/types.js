import React from "react";
import { CheckCircle, Globe, Database, Users, Type } from "react-feather";

// Add link type, remove search
export const refTypes = {
  text: {
    active: true,
    icon: <Type />,
    label: "Text",
    color: "#0077CC",
    method: "refs.insert",
  },
  mock: {
    active: true,
    icon: <Users />,
    label: "Mock",
    color: "#C48208",
    method: "mocks.insert",
  },
  resource: {
    active: true,
    icon: <Globe />,
    label: "Resource",
    color: "#9b64bf",
    method: "refs.insert",
  },
  table: {
    active: false,
    icon: <Database />,
    label: "Table",
    color: "#15796E",
    method: "refs.insert",
  },
  tasks: {
    active: true,
    icon: <CheckCircle />,
    label: "Tasks",
    color: "#fe714a",
    method: "refs.insert",
  },
};

export const refTypeLabels = ["all", ...Object.keys(refTypes)];
