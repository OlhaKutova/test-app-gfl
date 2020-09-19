import React from "react";

import { history } from "../../routes/history";
import "./index.scss";

export const PrevButton = ({ title, className }) => (
  <button
    className={`arrow arrow-prev-wrapper position-absolute ${className}`}
    onClick={() => history.goBack()}
  >
    {title}
  </button>
);

export const NextButton = ({ title, className }) => (
  <button
    className={`arrow arrow-next-wrapper position-absolute ${className}`}
    onClick={() => history.goForward()}
  >
    {title}
  </button>
);
