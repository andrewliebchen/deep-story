import { Box, Flex, Input, Button } from "theme-ui";
import { useRefSearch, useAccount, useChildRefs } from "../utils/hooks";
import { X } from "react-feather";
import PropTypes from "prop-types";
import React, { useState } from "react";
import RefsListRow from "./RefsListRow";

const Search = (props) => {
  const [value, setValue] = useState(props.value || "");
  const searchResults = useRefSearch(value);

  const { userId } = useAccount();
  const { refs } = useChildRefs(userId);

  return (
    <Flex variant="flex.overlayBackground">
      <Flex
        sx={{
          flexDirection: "column",
          p: 4,
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
        {value.length > 2 ? (
          <Box sx={{ mt: 3, mb: -3 }}>
            {value &&
              searchResults.map((ref) => (
                <RefsListRow key={ref._id} {...props} {...ref} />
              ))}
          </Box>
        ) : (
          <Box sx={{ mt: 3, mb: -3 }}>
            {refs.slice(0, 3).map((ref) => (
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
  closeSearch: PropTypes.func,
};

export default Search;
