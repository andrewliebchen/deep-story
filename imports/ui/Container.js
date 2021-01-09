import { Flex } from "theme-ui";
import { Redirect } from "react-router-dom";
import { Search } from "react-feather";
import { useAccount } from "../utils/hooks";
import AccountToggle from "./AccountToggle";
import AppContext from "./AppContext";
import Nav from "./Nav";
import PropTypes from "prop-types";
import React, { useContext } from "react";

const Container = (props) => {
  const { showGlobalSearch, setShowGlobalSearch } = useContext(AppContext);
  const { isLoggedIn } = useAccount();

  return (
    <Flex
      sx={{
        width: "full",
        position: "relative",
        alignItems: "center",
        flexDirection: "column",
        mb: 4,
        ...props.sx,
      }}
    >
      {props.header ||
        (isLoggedIn ? (
          <Flex sx={{ variant: "flex.header" }}>
            <Nav />
            <Flex
              sx={{
                bg: "muted",
                width: "ref",
                height: "control",
                borderRadius: 3,
                cursor: "pointer",
                color: "textSecondary",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setShowGlobalSearch(true)}
            >
              <Search />
            </Flex>
            <AccountToggle />
          </Flex>
        ) : (
          <Redirect to="/login" />
        ))}
      {props.children}
    </Flex>
  );
};

Container.propTypes = {
  header: PropTypes.node,
};

export default Container;
