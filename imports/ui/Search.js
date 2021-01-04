import { Box, Flex, Input, Button } from "theme-ui";
import { useRefSearch } from "../utils/hooks";
import { X } from "react-feather";
import PropTypes from "prop-types";
import React, { useState } from "react";
import RefsListRow from "./RefsListRow";

const Search = (props) => {
  const [value, setValue] = useState(props.value || "");
  const searchResults = useRefSearch(value);

  return (
    <Flex variant="flex.overlayBackground">
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
        <Flex>
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
          <Button
            sx={{
              variant: "button.secondary",
              ml: 2,
            }}
            onClick={props.closeSearch}
            children={<X />}
            title="Close search"
          />
        </Flex>
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
  closeSearch: PropTypes.func,
};

export default Search;
