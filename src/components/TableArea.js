import React from "react";
import TableHeader from "./TableHeader";
import ResultsTable from "./ResultsTable";

function TableArea(props) {
    return (
        <table className="table table-striped">
            <TableHeader sortEmployees={props.sortEmployees}/>
            <ResultsTable results={props.results} search={props.search}/>
        </table>
    );
}

export default TableArea;






