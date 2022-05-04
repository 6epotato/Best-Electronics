import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Item from '../../Inventory/Item/Item'

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {
                            items.map(item => <Item key={item._id} item={item}></Item>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Items;