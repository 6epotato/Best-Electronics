import React from 'react';
import Chart from '../Chart/Chart'
import { Card, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import useItem from '../Hooks/useItem'
import './InventoryInfo'

const InventoryInfo = () => {
    const [items, setItems] = useItem()
    return (
        <div>


            <Container >
                <Row className='justify-content-md-center'>
                    <Card className='my-5' style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroupItem>Last month deleverd: 30</ListGroupItem>
                            <ListGroupItem>Last week deleverd:20</ListGroupItem>
                            <ListGroupItem>All Items:{items.length}</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Chart></Chart>

                </Row>
            </Container>
        </div>
    );
};

export default InventoryInfo;