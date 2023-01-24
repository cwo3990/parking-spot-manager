import React from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";

function Spot (props) {
    let style = {
        backgroundColor: props.available ? "green" : "red",
    }
    let message = "Occupied";
    if (props.available) {
        message = "Reserve this spot";
    }

    return (
        <Card 
            className='spot col-12 col-sm-6' 
            body>
            {/* <Container
                className='club-status'
            >
                <Row>
                    <Button
                        tag="button"
                        className='col-12'
                        style={style}
                        onClick={() => props.onClick()}
                    >
                        <Col tag="p" className='club-info'>{club.name}</Col>
                        <Col tag="p" className='club-info'>{club.location}</Col>
                        <Col tag="p" className='club-info'>{club.musicGenre}</Col>
                        <Col tag="p" className='club-info'>{message}</Col>
                    </Button>
                </Row>
            </Container> */}
            <CardHeader>
                <Row>
                    <Col tag="h1" className='col-12'>Spot {props.number}</Col>
                </Row>
            </CardHeader>
            <CardBody>
                <Row>
                    <Button disabled={!props.available}>{message}</Button>
                </Row>
            </CardBody>
            {/* <CardFooter>
                <Row>
                    <Button
                        className="minus col-6" 
                        onClick={() => props.onDecrement()} 
                        disabled={club.numOccupants === 0}
                    >
                        -
                    </Button>
                    <Button 
                        className="plus col-6" 
                        onClick={() => props.onIncrement()} 
                        disabled={club.numOccupants === club.maxCapacity}
                    >
                        +
                    </Button>
                </Row>
            </CardFooter> */}
        </Card>
    );
}

export default Spot;