import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import MessageScreen from '../screens/messages';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000000',
                inactiveBackgroundColor: '#3772e0'
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTintColor:'#ffffff',
                    headerStyle:{
                        backgroundColor:'#3772e0',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/icons/home.png')}
                            tintColor={
                                focused
                                    ? '#ffffff'
                                    : 'yellow'
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={MessageScreen}
                options={{
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: '#3772e0',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/icons/message.png')}
                            tintColor={
                                focused
                                    ? '#ffffff'
                                    : 'yellow'
                            }
                        />
                    ),
                }}

            />
        </Tab.Navigator>
    );
}
export default BottomTabNavigator;