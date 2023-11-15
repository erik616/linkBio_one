// import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"

import { Home } from "../Pages/Home"
import { AboutMe } from '../Pages/AboutMe';

const Tab = createBottomTabNavigator()

export function MyRoute() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                // tabBarShowLabel: false,
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: "bold"
                },
                tabBarActiveTintColor: "#000",

                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5,
                }
            }}
            
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' color={color} size={size} />
                        }
                        return <Ionicons name='home-outline' color={color} size={size} />
                    }
                }}     
            />
            <Tab.Screen
                name="About"
                component={AboutMe}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='person' color={color} size={size} />
                        }
                        return <Ionicons name='person-outline' color={color} size={size} />
                    }
                }}

            />
        </Tab.Navigator>
    )
}