import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';

import {Card, CardSection, Button} from './common'

const style = StyleSheet.create({
    image : {
        height: 300,
        flex: 1
    },
    name : {
        flex: 1,
        fontSize: 18
    },
    price: {
        fontSize: 18,
        color: 'navy',
        width: 100
        
    }
})

class ProductItem extends Component {

    getPriceFormatted(price) {
        if (price) {
            const priceFormatted = price
            .toString()
            .split('')
            .reverse()
            .reduce((acc, curr, i) => {
                return curr + (i && i % 3 == 0 ? '.' : '') + acc
            }, '')
            return `Rp${priceFormatted}`
        }else {
            return 'Rp0'
        }
    }
    
    render() {
        const {name, price, image, actionLink} =this.props.product

        return (
            <Card>
                <CardSection>
                    <Image style = {style.image} source={ {uri: image} }></Image>
                </CardSection>
                <CardSection>
                <Text style = {style.name}>
                    { name }</Text>
                <Text style = {style.price}>
                    { this.getPriceFormatted(price) }
                </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={ () => Linking.openURL(actionLink)}>
                        Buy now
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default ProductItem;