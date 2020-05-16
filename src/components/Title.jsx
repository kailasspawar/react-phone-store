import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Title extends Component {

    static propTypes = {
        title:  PropTypes.string,
        name: PropTypes.string
    };

    render() {
        return (
            <>
            <Row>
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize font-weight-bold">
                        {this.props.name} <strong className="text-blue">{this.props.title}</strong>
                    </h1>
                </div>                
            </Row>
            </>
        );
    }
}
