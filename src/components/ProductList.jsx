import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Container, Row } from 'react-bootstrap';
import Title from './Title';
import Product from './Product';
import PropTypes from 'prop-types';

export default class ProductList extends Component {

    static propTypes = {
        products: ImmutablePropTypes.list,
        handleAddToCart: PropTypes.func,
        setProduct: PropTypes.func,
    }
    render() {
        return (
            <>
                <div className="py-5" id="productPage">
                    <Container>
                        <Title name={"our"} title="products" />
                        <Row>
                            {
                                this.props.products.map( (product) => {
                                return <Product key={product.get('id').toString()} product={product} 
                                        handleAddToCart={this.props.handleAddToCart}
                                        setProduct={this.props.setProduct}
                                    />
                                }
                            )
                            }
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}