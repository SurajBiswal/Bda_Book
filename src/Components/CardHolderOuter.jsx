import React, { useState } from "react";
import CardHolder from "./CardHolder";
import "../StyleComponents/CardHolderOuter.css";
function CardHolderOuter({ numRows, height }) {
  return (
    <div className="outerHolder" style={{ height: height + "px" }}>
      <div className="innerholder">
        <CardHolder numRows={numRows} />
      </div>
    </div>
  );
}

export default CardHolderOuter;
