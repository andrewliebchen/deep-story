import { Box, Flex, Input, Button } from "theme-ui";
import { useKeycodes } from "@accessible/use-keycode";
import { useRefSearch, useFocus } from "../utils/hooks";
import { X } from "react-feather";
import PropTypes from "prop-types";
import React, { useState } from "react";
import RefsListRow from "./RefsListRow";

const Search = (props) => {
  const [value, setValue] = useState(props.value || "");
  const searchResults = useRefSearch(value);

  return (
    <Flex variant="flex.overlayBackground">
      <Button
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
      <Flex
        sx={{
          flexDirection: "column",
          p: 3,
          width: "ref",
          position: "relative",
          bg: "background",
          boxShadow: "overlay",
          borderRadius: 4,
        }}
      >
        <Input
          type="text"
          placeholder="Search"
          sx={{
            variant: "input.default",
            position: "relative",
            zIndex: 2,
          }}
          autoFocus
          onChange={(event) => setValue(event.target.value)}
          value={value}
          {...props}
        />
        {value.length > 2 && (
          <Box mt={3}>
            {value &&
              searchResults.map((ref) => (
                <RefsListRow key={ref._id} {...props} {...ref} />
              ))}
          </Box>
        )}
      </Flex>
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
