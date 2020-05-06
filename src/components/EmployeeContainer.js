import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Nav from "./Nav";
import TableArea from "./TableArea";
import TableHeader from "./TableHeader";

import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "",
    order: "ascend"
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployees();
  }


  searchEmployees = () => {
    API.getAllEmployees()
      .then(res => {
        console.log(res)
        this.setState({
          result: res.data.results
        })
      })
      .catch(err => console.log(err));
  };

  sortEmployees = event => {
    const name = event.target.name;
    console.log(name);

    //make a copy of the result state array
    //.sort on the copy
    let arrCopy = [...this.state.result]

    // sort by name
    arrCopy.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({ result: arrCopy });

  }



  // sortEmployees = (a, b) => {
  //   if (this.state.order === "ascend") {
  //     // account for missing values
  //     if (a[TableHeader] === undefined) {
  //       return 1;
  //     } else if (b[TableHeader] === undefined) {
  //       return -1;
  //     }
  //     // numerically
  //     else if (TableHeader === "name") {
  //       return a[TableHeader].lastName.localeCompare(b[TableHeader].lastName);
  //     } else {
  //       return a[TableHeader] - b[TableHeader];
  //     }
  //   } else {
  //     // account for missing values
  //     if (a[TableHeader] === undefined) {
  //       return 1;
  //     } else if (b[TableHeader] === undefined) {
  //       return -1;
  //     }
  //     // numerically
  //     else if (TableHeader === "name") {
  //       return b[TableHeader].lastName.localeCompare(a[TableHeader].lastName);
  //     } else {
  //       return b[TableHeader] - a[TableHeader];
  //     }
  //   }
  // }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the randomuser API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Nav
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card
              // heading={this.state.result.name || "All Employees"}
              heading={"All Employees"}
            >
              {/* {false ? ( */}
              {this.state.result.length ? (
                <TableArea
                  results={this.state.result}
                  search={this.state.search}
                  sortEmployees={this.sortEmployees}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Card>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default EmployeeContainer;
