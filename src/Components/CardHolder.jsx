import React from "react";
import "../StyleComponents/CardHolder.css";
import SportsArenaCard from "./SportsArenaCard";
function CardHolder({ numRows }) {
  // Define the number of rows and columns

  const numCols = 3;

  // Initialize an empty array to hold the rows
  const rows = [];

  // Outer loop for rows
  for (let i = 0; i < numRows; i++) {
    // Initialize an empty array to hold the columns for the current row
    const cols = [];

    // Inner loop for columns
    for (let j = 0; j < numCols; j++) {
      // Push the SportsArenaCard component into the current row's columns array
      cols.push(<SportsArenaCard key={j} />);
    }

    // Push the current row with columns into the rows array
    rows.push(
      <div
        key={i}
        className="row"
        style={{
          display: "flex",
          width: "1010px",
          justifyContent: "space-between",
          backgroundColor: "#D9D9D9",
        }}
        // key={i}
        // className="row"
      >
        {cols}
      </div>
    );
  }

  // Render all rows
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: 1200,
        backgroundColor: "#D9D9D9",
      }}
    >
      {rows}
    </div>
  );
}

export default CardHolder;
