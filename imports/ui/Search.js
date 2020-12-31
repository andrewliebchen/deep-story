import { Flex, Input, IconButton, Button } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import { useRefSearch, useFocus } from "../utils/hooks";
import { X } from "react-feather";
import PropTypes from "prop-types";
import React, { useState } from "react";
import RefFilter from "./RefFilter";
import RefsListRow from "./RefsListRow";

const Search = (props) => {
  const [value, setValue] = useState(props.value || "");
  const [setFocus, focusProps] = useFocus();
  const searchResults = useRefSearch(value);

  const setBlur = () => {
    setValue("");
    setFocus(false);
  };

  const keycodesListener = useKeycodes({
    // esc
    27: () => setBlur(),
  });

  return (
    <Flex
      ref={keycodesListener}
      sx={{ px: 3, width: "ref", position: "relative" }}
    >
      <Input
        type="text"
        placeholder="Search"
        sx={{
          variant: "input.default",
          position: "relative",
          zIndex: 2,
        }}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        {...props}
        {...focusProps}
      />
      {props.showFilter && <RefFilter />}
      {value.length > 2 && (
        <>
          <Flex sx={{ variant: "flex.overlayBackground" }}>
            <IconButton
              sx={{
                variant: "button.secondary",
                position: "absolute",
                right: 3,
                top: 3,
                zIndex: 1,
              }}
              onClick={() => setBlur()}
              children={<X />}
            />
          </Flex>
          <Flex
            sx={{
              variant: "flex.ref",
              borderRadius: 5,
              boxShadow: "overlay",
              flexDirection: "column",
              left: 0,
              position: "absolute",
              pt: 72,
              top: -3,
              zIndex: 1,
            }}
          >
            {value &&
              searchResults.map((ref) => (
                <RefsListRow
                  key={ref._id}
                  onClick={() => setBlur()}
                  {...props}
                  {...ref}
                />
              ))}
          </Flex>
        </>
      )}
    </Flex>
  );
};

Search.propTypes = {
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  navigate: PropTypes.bool,
  showFilter: PropTypes.bool,
};

export default Search;
