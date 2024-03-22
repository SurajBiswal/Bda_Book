import React from "react";
import "../StyleComponents/More.css";
function More({ handleShowMore }) {
  return (
    <div>
      <div className="More" onClick={handleShowMore}>
        <div className="BoxButton">
          <a className="inside">Show More</a>
        </div>
      </div>
    </div>
  );
}

export default More;
