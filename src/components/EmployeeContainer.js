import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Nav from "./Nav";
import TableArea from "./TableArea";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   this.searchEmployees("The Matrix");
  // }


  searchEmployees = () => {
    API.getAllEmployees()
      .then(res =>
        this.setState({
          result: res.results
        })
      )
      .catch(err => console.log(err));
  };

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
              heading={this.state.result.name || "All Employees"}
            >
              {this.state.result.Title ? (
                <TableArea results={this.state.result}>
                </TableArea>
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
