import React from "react";
import TableHeader from "./TableHeader";
import DataBody from "./DataBody";

function TableArea(props) {
    return (
        <table className="table table-striped">
            <TableHeader sortEmployees={props.sortEmployees} />
            <DataBody results={props.results} search={props.search} />
        </table>
    );
}

export default TableArea;






