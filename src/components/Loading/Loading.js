import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading({ loading }) {
  document.body.style.overflow = loading ? "hidden" : "auto";

  return (
    <div className={`loading--wrapper ${loading ? "overlay" : ""}`}>
      <PuffLoader
        css={override}
        size={150}
        color={"#e50914"}
        loading={loading}
      />
    </div>
  );
}

export default Loading;
