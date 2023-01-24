import './App.css';
import React, { Component } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import Spot from './Spot';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spots: [{
        id: 1,
        number: "1",
        available: true,
      },
      {
        id: 2,
        number: "2",
        available: true,
      },
      {
        id: 3,
        number: "3",
        available: true,
      },
      {
        id: 4,
        number: "4",
        available: false,
      },],
    };
  }

  renderSpots() {
    return this.state.spots.map((spot) => {
      return (
        <Spot
          key={spot.id}
          number={spot.number}
          available={spot.available}
        />
      );
    });
  }

  

  render () {
    return(
      <Container className='App'>
      <Navbar>
        <NavbarBrand 
        href="/" 
        tag='h1'
        >
          Parking Spot Manager
        </NavbarBrand>
        <NavItem>
          <a href="/login">Login</a>
        </NavItem>
      </Navbar>
        <Row>
          <Col>
            <h1>Parking Spot Manager</h1>
          </Col>
        </Row>
        <Row>
        {this.renderSpots()}
        </Row>
      </Container>
    );
  }
}

export default App;
