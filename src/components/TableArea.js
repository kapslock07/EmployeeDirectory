import React from "react";
import TableHeader from "./TableHeader";
import ResultsTable from "./ResultsTable";

function TableArea(props) {
    return (
        <table class="table table-striped">
            <TableHeader />
            <ResultsTable />
        </table>
    );
}

export default TableArea;






