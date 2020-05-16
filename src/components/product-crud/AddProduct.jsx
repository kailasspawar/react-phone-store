import React, { Component } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import FileUpload from './FileUpload';
import axios from 'axios';

class AddProduct extends Component {
    
    render() {
        return (
            <>
                <Container>
                    <Form noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="p-4" controlId="pTitle">
                                <Form.Label>
                                    Product Title :
                                </Form.Label>
                                <Form.Control defaultValue={this.props.product.get('title')} required type="text" placeholder="Product Title" 
                                    onBlur ={e => {this.handleChange('title', e.target.value)}} />
                                <Form.Control.Feedback>Looks Good...!!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="p-4" controlId="pPrice">
                                <Form.Label>
                                        Product Price :
                                </Form.Label>
                                <Form.Control required type="text" defaultValue={this.props.product.get('price')} placeholder="Product Price"
                                   onBlur={e => {this.handleChange('price', e.target.value)}} />
                                <Form.Control.Feedback>Looks Good...!!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="p-4" controlId="pCompany">
                                <Form.Label>
                                        Product Company :
                                </Form.Label>
                                <Form.Control required type="text" defaultValue={this.props.product.get('company')} placeholder="Product Company" 
                                    onBlur={e => {this.handleChange('company', e.target.value)}}/>
                                <Form.Control.Feedback>Looks Good...!!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="p-4" controlId="pInfo">
                                <Form.Label>Product Info : </Form.Label>
                                <Form.Control as="textarea" rows="3" defaultValue={this.props.product.get('info')} onBlur={e => {this.handleChange('info', e.target.value)}}/>
                            </Form.Group>
                            <Form.Group as={Col} className="p-4" controlId="pImageFile">
                               <FileUpload setImg={this.setImg}/>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit">Add Product</Button>
                    </Form>
                </Container>
            </>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('products/create', this.props.product).then(
            response => {
                console.log(response);
            }
        ).catch(err => {console.log(err)});
        console.log("submit form action");
    }

    handleChange = (field, value) => {
        this.props.updateProduct(field, value);   
    }

    setImg = (img) => {
        this.props.updateProduct('img', img);
    }
}

export default AddProduct;