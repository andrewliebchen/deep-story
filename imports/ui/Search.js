import React, { useState, useEffect, useRef } from "react";
import { Flex, Input } from "theme-ui";
import RefListRow from "./RefsListRow";
import PropTypes from "prop-types";
import RefsListRow from "./RefsListRow";
import { useRefSearch, useFocus } from "../utils/hooks";
import { useKeycodes } from "@accessible/use-keycode";

const Search = (props) => {
  const [value, setValue] = useState(props.value || "");
  const [setFocus, focusProps] = useFocus();
  const searchResults = useRefSearch(value);

  const keycodesListener = useKeycodes({
    // esc
    27: () => {
      setValue("");
      setFocus(false);
    },
  });

  return (
    <Flex
      ref={keycodesListener}
      sx={{ px: 3, width: "ref", position: "relative" }}
    >
      <Input
        type="search"
        placeholder="Search"
        sx={{
          variant: "input.default",
          position: "relative",
          zIndex: 1,
        }}
        onChange={(event) => setValue(event.target.value)}
        defaultValue={value}
        {...props}
        {...focusProps}
      />
      {value.length > 2 && (
        <>
          <Flex
            sx={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              bg: "rgba(255, 255, 255, 0.9)",
            }}
          />
          <Flex
            sx={{
              variant: "flex.ref",
              position: "absolute",
              top: -3,
              left: 0,
              pt: 72,
              borderRadius: 5,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              flexDirection: "column",
            }}
          >
            {value &&
              searchResults.map((ref) => (
                <RefsListRow {...ref} key={ref._id} />
              ))}
          </Flex>
        </>
      )}
    </Flex>
  );
};

Search.propTypes = {
  value: PropTypes.string,
};

export default Search;
