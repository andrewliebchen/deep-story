import React from "react";
import RefContent from "./RefContent";
import { useGetRef } from "../utils/hooks";

const RefLinkView = (props) => {
  const ref = useGetRef(props.linkId);

  return <RefContent {...ref} />;
};

export default RefLinkView;
