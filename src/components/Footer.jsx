import React from 'react';
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact';
import '../App.css'

const Footer = () => {
    return (
        <MDBFooter color="blue" className="footer font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <div className="container">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title ml-4">About US</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#section">About US</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#section">Our Products</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Connect With US</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#section">Contact US</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#section">Git Link</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
                </div>
            </MDBContainer>
        </MDBFooter>
    )
}

export default Footer;