import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to={"/"} className="link__header">
      <div className="header">
        <h1 className="header__h1">Alkemy Challege</h1>
      </div>
    </Link>
  );
};
