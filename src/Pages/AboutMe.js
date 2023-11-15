import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Ionicons from "react-native-vector-icons/Ionicons"

import { Header } from '../Components/Header';

export function AboutMe() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.body}>
                <Text style={styles.text}>
                    &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{'\n'}
                    &emsp;Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. {'\n'}
                    &emsp;Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
    },
    header: {
        marginTop: getStatusBarHeight() + 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: "center"
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold"
    },
    subTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        letterSpacing: 1
    },
    body: {
        flex: 1,
        width: '100%',
        backgroundColor: "#fff",
        marginTop: 20,
        padding: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 25,
        textAlign: 'justify',
    },
});
