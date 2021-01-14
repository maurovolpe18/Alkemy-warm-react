import React from "react";

export const Body = ({ body }) => {
  console.log(body);
  return <h2 className="post__h2">{body}</h2>;
};
