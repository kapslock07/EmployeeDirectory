import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id.value}>
          <img alt={result.name.first + ` ` + result.name.first} className="img-fluid" src={result.picture.thumbnail} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
