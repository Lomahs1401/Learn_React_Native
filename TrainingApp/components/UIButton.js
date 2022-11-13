import React, {Component} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontSizes } from '../constants'

function UIButton(props) {
    const {onPress, title, isSelected} = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderColor: 'white',
                borderWidth: 1,
                height: 45,
                borderRadius: 5,
                marginHorizontal: 24,
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isSelected ? 'white' : null,
            }}>
            {isSelected && 
                <Icon
                    name={"check-circle"}
                    size={20}
                    style={{
                        color: 'green',
                        position: 'absolute',
                        top: 10,
                        left: 10
                    }}
                />
            }
            <Text
                style={{
                    color: isSelected ? colors.primary : 'white',
                    fontSize: fontSizes.h6
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default UIButton