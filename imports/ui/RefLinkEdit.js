import React from "react";
import RefContent from "./RefContent";
import { useGetRef } from "../utils/hooks";

const RefLinkEdit = (props) => {
  const ref = useGetRef(props.linkId);

  return (
    <>
      Link
      <RefContent {...ref} />
    </>
  );
};

export default RefLinkEdit;

// TODO: Need to make it so the correct ref get's edited when the edit button is pressed...

// OR! Maybe we lock editing the linked Ref directly, and send you to the Ref's page to do the editing...
