import {
    FlatList,
    Linking,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Ionicons from "react-native-vector-icons/Ionicons"

import { Header } from '../Components/Header';

const WEBs = [
    {
        "name": "GitHub",
        "logo": "github",
        "color": "#56067F",
        "url": "https://github.com/erik616"
    },
    {
        "name": "Instagram",
        "logo": "instagram",
        "color": "#8C306C",
        "url": "https://www.instagram.com/_erik_souzaa/"
    },
    {
        "name": "Linkedin",
        "logo": "linkedin",
        "color": "#2464E3",
        "url": "https://www.linkedin.com/in/erik-dionata-746925244/"
    },
    {
        "name": "Twitch",
        "logo": "twitch",
        "color": "#202359",
        "url": "https://www.twitch.tv/"
    },
    {
        "name": "WhatsApp",
        "logo": "whatsapp",
        "color": "#04BF20",
        "url": "https://api.whatsapp.com/send?phone=5538991205422"
    },
]

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.body}>
                <FlatList
                    data={WEBs}
                    renderItem={({ item }) => <Card data={item} />}
                    ItemSeparatorComponent={<View style={{ height: 10 }}></View>}
                    style={styles.list}
                />
            </View>
        </SafeAreaView>
    );
}

function Card({ data }) {

    const handleLink = () => Linking.openURL(data.url)

    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={styles.card}
            onPress={handleLink}
        >
            <Ionicons name={`logo-${data.logo}`} size={32} color={data.color} />
            <Text style={styles.cardTitle}>
                {data.name}
            </Text>
        </TouchableOpacity>
    )
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
        paddingTop: 30
    },
    list: {
        width: '100%',
        paddingHorizontal: 50
    },

    card: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderBottomWidth: 4,
        borderColor: '#3c3c3c',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "700"
    }
});
