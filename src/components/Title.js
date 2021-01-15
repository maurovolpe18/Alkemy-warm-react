import React from "react";

export const Title = ({ title }) => {
  return (
    <div className="title__container">
      <h1 className="post__h1">{title}</h1>
    </div>
  );
};
