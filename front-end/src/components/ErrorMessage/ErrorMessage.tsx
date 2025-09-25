import React from "react";
import "7.css/dist/7.scoped.css";
import "./ErrorMessage.styles.css";

function ErrorMessage() {
  return (
    <div className="tooltip" role="tooltip">
      Enter correct username and password
    </div>
  );
}

export default ErrorMessage;
