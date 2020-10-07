import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import { Button, Card, CardSection } from './common';

import ProductForm from './ProductForm';

class ProductEdit  extends Component {
    onButtonPress() {
        const data = this.props.form
        const url = 'https://simple-ecommerce-9999.herokuapp.com/api/v1/product/' + data.id

        axios.patch(url, data)
            .then(() =>{
                this.props.dispatch({type: 'RESET_PRODUCT '})
                this.props.navigation.navigate('Product List')
            })
    }
    onButtonDeletePress() {
        const data = this.props.form
        const url = 'https://simple-ecommerce-9999.herokuapp.com/api/v1/product/' + data.id

        axios.delete(url)
            .then(() =>{
                this.props.dispatch({type: 'RESET_PRODUCT '})
                this.props.navigation.navigate('Product List')
            })
    }
    render() { 
        return (
            <Card>
                <ProductForm/>
                <CardSection>
                <Button onPress= { () => this.onButtonPress() }>
                    Edit
                </Button>
                </CardSection>
                <CardSection>
                <Button onPress= { () => this.onButtonDeletePress() }>
                    Delete
                </Button>
                </CardSection>
            </Card>
          );
    }
}

const mstp = (state) => ({ form: state.productForm})
 
export default connect(mstp)(ProductEdit) ;