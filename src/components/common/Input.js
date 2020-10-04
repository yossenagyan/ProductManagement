import React, { Component } from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
    containter: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#007aff',
        marginBottom: 10

    },
    label: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10

    },
    input: {
        flex: 2,
        paddingHorizontal: 5,
        fontSize: 16,
        lineHeight: 23,
        height: 50
    }
})

class Input extends Component {

    render() { 
        const {
            label, 
            placeholder, 
            secureTextEntry,
            value,
            onChangeText,
        } = this.props
        return ( 
            <View style= {style.containter}>
                <Text style= {style.label}>{label}</Text>
                <TextInput
                value= {value}
                onChangeText = {onChangeText}
                style= {style.input} 
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}></TextInput>
            </View>
         );
    }
}
 
export default Input;