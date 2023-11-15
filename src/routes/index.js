import { NavigationContainer } from "@react-navigation/native";
import { MyRoute } from "./stack";

export function Routes() {
    return (
        <NavigationContainer>
            <MyRoute />
        </NavigationContainer>
    )
}