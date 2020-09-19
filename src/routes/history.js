import { createBrowserHistory } from "history";

const history = createBrowserHistory({
  basename: process.env.REACT_APP_HISTORY_BASENAME,
});

export { history };
