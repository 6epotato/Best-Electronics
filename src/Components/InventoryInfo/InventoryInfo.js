import React from 'react';
import Chart from '../Chart/Chart'
import { Card, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const InventoryInfo = () => {
    return (
        <div>
            <Container >
                <Row className='justify-content-md-center'>
                    {/* <Card className='my-5' style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroupItem>Low Stock Items: 30</ListGroupItem>
                            <ListGroupItem>All Group Items: 40</ListGroupItem>
                            <ListGroupItem>All Items: 100</ListGroupItem>
                        </ListGroup>
                    </Card> */}
                    <Chart></Chart>

                </Row>
            </Container>
        </div>
    );
};

export default InventoryInfo;