/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { sumTwoNumbers, subtractTwoNumbers, PI } from '../util/Calculation.js';
import { icons, images, fontSizes, colors } from '../constants'
import { UIButton } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome5';

function Welcome(props) {
  // State: When a state is changed => UI is reloaded
  // like getter/setter
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    }
  ])
  return (
    <View style={{
      backgroundColor: 'white',
      flex: 100,
    }}>
      <ImageBackground
        source={
          images.background
        }
        resizeMode='cover'
        style={{
          flex: 100,
        }}>
        <View style={{
          flex: 10,
          height: 50,
        }}>
          <View style={{
            flexDirection: 'row',
            height: 50,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
            <Image
              source={
                icons.icon_flame
              }
              style={{
                width: 30,
                height: 30,
                marginHorizontal: 10,
              }}
            />
            <Text style={{
              color: 'white',
            }}>
              PARAGOX.CO!
            </Text>
            <View style={{ flex: 1 }} />
            <Icon 
              name={'question-circle'} 
              color={'white'}
              size={20}
              style={{
                tintColor: 'white',
                marginEnd: 20,
              }}
            />
          </View>
        </View>
        <View style={{
          flex: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            marginBottom: 7,
            color: 'white',
            fontSize: fontSizes.h5
          }}>
            Welcome to
          </Text>
          <Text style={{
            marginBottom: 7,
            color: 'white',
            fontWeight: 'bold',
            fontSize: fontSizes.h3
          }}>
            PARAGOX.CO
          </Text>
          <Text style={{
            color: 'white',
            fontSize: fontSizes.h5
          }}>
            Please select your account type
          </Text>
        </View>
        <View style={{
          flex: 40,
          // backgroundColor: 'purple'
        }}>
          {accountTypes.map((accountType, index) => {
            return (
              <UIButton
                key={index}
                title={accountType.name}
                isSelected={accountType.isSelected}
                onPress={() => {
                  let newAccountTypes = accountTypes.map(eachAccountType => {
                    return {
                      ...eachAccountType,
                      isSelected: accountType.name == eachAccountType.name
                    }
                  })
                  setAccountTypes(newAccountTypes);
                }}
              />
            );
          })}
        </View>
        <View style={{
          flex: 20,
        }}>
          <UIButton title={'Login'.toUpperCase()} />
          <Text style={{
            color: 'white',
            fontSize: fontSizes.h5,
            textAlign: 'center',
            marginVertical: 8,
          }}>
            Want to register new Account?
          </Text>
          <TouchableOpacity 
            onPress={() => {alert('Press register')}}
            style={{
              padding: 5,
              // backgroundColor: 'red'
          }}>
            <Text style={{
              color: colors.primary,
              fontSize: fontSizes.h5,
              textAlign: 'center',
              textDecorationLine: 'underline',
              marginVertical: 8,
            }}>
              Register
            </Text>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;

// const MainScreen = (props) => {
//     const {x, y} = props
//     const {person} = props
//     const {name, age, email} = person
//     const {products} = props
//     return <View style={{}}>
//         <Text>Value of x = {x}, Value of y = {y}</Text>
//         <Text>Name = {name}, Email = {email}, Age = {age}</Text>
//         {products.map(product => {
//             return (
//                 <React.Fragment>
//                     <Text>{product.productName}</Text>
//                     <Text>{product.year}</Text>
//                 </React.Fragment>
//             )
//         })}
//         <Text>Sum 2 + 3 = {sumTwoNumbers(2, 3)}</Text>
//         <Text>Subtract 3 - 2 = {subtractTwoNumbers(3, 2)}</Text>
//         <Text>Number of PI = {PI}</Text>
//     </View>
// }

// export default MainScreen