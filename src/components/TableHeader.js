import React from "react";

function TableHeader(props) {
    return (
        <thead>
            <tr>
                <th scope="col" name="firstName">First</th>
                <th scope="col" name="lastName">Last</th>
                <th scope="col" name="emailAddress">Email</th>
                <th scope="col" name="phoneNumber">phone</th>
            </tr>
        </thead>
    );
}

export default TableHeader;
