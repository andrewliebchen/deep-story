import React from "react";
import AccountToggle from "./AccountToggle";
import { Flex } from "theme-ui";

const Login = () => (
  <Flex
    sx={{
      height: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {console.log("hi")}
    <AccountToggle />
  </Flex>
);

export default Login;
