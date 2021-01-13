import React from "react";
import { CheckCircle, Globe, Database, Users, Type } from "react-feather";

export const refTypes = {
  text: {
    active: true,
    icon: <Type />,
    label: "Text",
    color: "#0077CC",
    method: "texts.insert",
    route: "/texts",
  },
  mock: {
    active: true,
    icon: <Users />,
    label: "Mock",
    color: "#AE7709",
    method: "mocks.insert",
    route: "/mocks",
  },
  resource: {
    active: true,
    icon: <Globe />,
    label: "Resource",
    color: "#EF43AA",
    method: "resources.insert",
    route: "/resources",
  },
  data: {
    active: false,
    icon: <Database />,
    label: "Data",
    color: "#2E8A74",
    method: "refs.insert",
    route: "/data",
  },
  tasks: {
    active: true,
    icon: <CheckCircle />,
    label: "Tasks",
    color: "#864EBC",
    method: "tasks.insert",
    route: "/tasks",
  },
};

export const refTypeLabels = ["all", ...Object.keys(refTypes)];
