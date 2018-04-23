import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "#4e6787", border: "none" }} className="btn btn-success">
    {props.children}
  </button>
);
