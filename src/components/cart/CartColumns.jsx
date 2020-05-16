import React from 'react';
import {Row, Col} from 'react-bootstrap';

const CartColumns = () => {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <Row>
                <Col xs="10" lg="2" className="mx-auto">
                    <p className="text-uppercase">products</p>
                </Col>
                <Col xs="10" lg="2" className="mx-auto">
                    <p className="text-uppercase">name</p>
                </Col>
                <Col xs="10" lg="2" className="mx-auto">
                    <p className="text-uppercase">price</p>
                </Col>
                <Col xs="10" lg="2" className="mx-auto">
                    <p className="text-uppercase">quantity</p>
                </Col>
                <Col xs="10" lg="2" className="mx-auto">
                    <p className="text-uppercase">remove</p>
                </Col>
                <Col xs="10" lg="2" className="mx-auto">
                    <p className="text-uppercase">total</p>
                </Col>
            </Row>

        </div>
    )
}

export default CartColumns;