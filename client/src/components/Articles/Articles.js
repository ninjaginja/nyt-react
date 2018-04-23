import React from "react";
import "./Articles.css";

export const Articles = ({ children }) => {
  return (
    <div className="articles-overflow-container">
      <ul className="articles-group">
        {children}
      </ul>
    </div>
  );
};
