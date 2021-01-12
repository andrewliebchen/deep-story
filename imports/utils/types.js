import React from "react";
import { CheckCircle, Globe, Database, Users, Type } from "react-feather";

// Add link type, remove search
export const refTypes = {
  text: {
    active: true,
    icon: <Type />,
    label: "Text",
    color: "#0077CC",
    method: "texts.insert",
  },
  mock: {
    active: true,
    icon: <Users />,
    label: "Mock",
    color: "#AE7709",
    method: "mocks.insert",
  },
  resource: {
    active: true,
    icon: <Globe />,
    label: "Resource",
    color: "#EF43AA",
    method: "resources.insert",
  },
  table: {
    active: false,
    icon: <Database />,
    label: "Table",
    color: "#2E8A74",
    method: "refs.insert",
  },
  tasks: {
    active: true,
    icon: <CheckCircle />,
    label: "Tasks",
    color: "#864EBC",
    method: "tasks.insert",
  },
};

export const refTypeLabels = ["all", ...Object.keys(refTypes)];
