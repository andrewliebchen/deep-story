import { Flex } from "theme-ui";
import AccountToggle from "./AccountToggle";
import React from "react";

const Login = () => (
  <Flex
    sx={{
      alignItems: "center",
      height: "100vh",
      justifyContent: "center",
      width: "100vw",
    }}
  >
    <AccountToggle />
  </Flex>
);

export default Login;
