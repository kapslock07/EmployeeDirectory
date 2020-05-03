import React from "react";

function ResultsTable(props) {
  return (
    <tbody>
      <tr>
        <td>{this.state.results.name.first}</td>
        <td>{this.state.results.name.last}</td>
        <td>{this.state.results.email}</td>
        <td>{this.state.results.phone}</td>

      </tr>
    </tbody>
  );
}

export default ResultsTable;
