import React from "react";

function ResultsTable(props) {
  const filteredArr = props.results.filter(employee=> 
    employee.name.first.toLowerCase().includes(props.search.toLowerCase())
    || employee.name.last.toLowerCase().includes(props.search.toLowerCase())
  )
  return (
    <tbody>
      {filteredArr.map((employee, i)=>(
      <tr key={i}>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
      </tr>
      ))}
    </tbody>
  );
}

export default ResultsTable;
