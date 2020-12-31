import { useGetRef } from "../utils/hooks";
import React from "react";
import RefContent from "./RefContent";

const RefLinkView = (props) => {
  const ref = useGetRef(props.linkId);

  return <RefContent {...ref} />;
};

export default RefLinkView;
