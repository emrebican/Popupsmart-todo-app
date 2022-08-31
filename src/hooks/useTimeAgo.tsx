/* import { parseISO, formatDistanceToNow } from "date-fns";

const useTimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <small>
      &nbsp;<i>{timeAgo}</i>
    </small>
  );
};

export default useTimeAgo;
 */

import React from "react";

const useTimeAgo = () => {
  return <div></div>;
};

export default useTimeAgo;
