import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';


import im from "../../assets/eu.jpg"


export function Header({ image }) {
    return (
        <View style={styles.header}>
            {image &&
                <Image
                    style={styles.img}
                    source={im}
                />
            }
            <Text style={[styles.title, image ? null : {marginTop: -10}]}>Erik Dionata</Text>
            <Text style={styles.subTitle}>&lt;Desenvolvedor /&gt;</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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

});
