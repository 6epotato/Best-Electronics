import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>

            <Row className='my-5 mx-2'>
                <Col xs={12} md={3} >
                    <Card border="dark" >
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>Difference between Javascript and Nodejs</Card.Title>
                            <Card.Text>
                                Javascript is a programming language that run in any browser. where node is interpreter for javascript.
                                Javascript basically use for client side where node is use for server side.
                                Java script is a upgarde version of ECMA Script where node is writtetn with c++
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card border="dark" >
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>When should you use Nodejs and when should you use Mongodb</Card.Title>
                            <Card.Text>
                                Node js is backend javascript runtime environment that run on V8 engine.
                                When its the matter to write some kind of program or server then node is used for.
                                On the other hand MongoDb is NoSql database management system.
                                It is a open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data.
                                So any application need to store any data then MongoDb is used for.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3} >
                    <Card border="dark" >
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title> Differences between Sql and Nosql databases.</Card.Title>
                            <Card.Text>
                                Sql database have fixed or statstic or predefiend schema on the other hand Nosql have  dynamic schema.
                                Sql database is not switable for hierarchical data storage but noSql is swited for hierarchical data storage.
                                Sql Database is vertically sclable where noSql database is horizontally scalable.
                                Sql is Relational database managment system and nosql is non relational or ditrbute database system.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card border="dark" >
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>What is the purpose of jwt and how does it work</Card.Title>
                            <Card.Text>
                                Jwt(Json web token) is an open standerd uses to share security information of two parties one is client and other is server.
                                each jwt contains encoded Json objects, including a set of claims. claims are uses cryptographic algorithm that ensure it cant be altered after the token is issued
                                Its a string made up by three parts with separated dots
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default Blogs;