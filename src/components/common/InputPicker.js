import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Picker } from '@react-native-community/picker';

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
        fontSize: 16,
        height: 50,
        color: 'black'
    }
})

class InputPicker extends Component {

    render() { 
        const { label, data, selectedValue, onValueChange } = this.props

        const renderPickerItem = data.map((item, i) =>
            <Picker.item label= { item.label } value= { item.value } key= { i} /> 
        )
        
            return ( 
            <View style= {style.containter}>
                <Text style= {style.label}>{label}</Text>
                <Picker
                selectedValue= {selectedValue}
                onValueChange = {onValueChange}
                style= {style.input}>
                    {renderPickerItem}
               </Picker>
               </View>


         );
    }
}
 
export default InputPicker;