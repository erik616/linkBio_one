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
import { ContactModal } from '../Components/ContactModal';
import { useState } from 'react';

const WEBs = [
    {
        "name": "GitHub",
        "logo": "logo-github",
        "color": "#56067F",
        "url": "https://github.com/erik616"
    },
    {
        "name": "Instagram",
        "logo": "logo-instagram",
        "color": "#8C306C",
        "url": "https://www.instagram.com/_erik_souzaa/"
    },
    {
        "name": "Linkedin",
        "logo": "logo-linkedin",
        "color": "#2464E3",
        "url": "https://www.linkedin.com/in/erik-dionata-746925244/"
    },
    {
        "name": "Twitch",
        "logo": "logo-twitch",
        "color": "#202359",
        "url": "https://www.twitch.tv/"
    },
]

const whatssap = {
    "name": "WhatsApp",
    "logo": "logo-whatsapp",
    "color": "#04BF20",
}

const email = {
    "name": "Email",
    "logo": "mail-outline",
    "color": "#F20530",
}

export function Home() {
    const [visiible, setVisible] = useState(false)
    const [app, setApp] = useState(undefined)

    function handleLink( data ) {
        console.log(data.url);
        if (data.url) return Linking.openURL(data.url)

        setVisible(!visiible)
        setApp(data.name)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header image />
            <View style={styles.body}>
                <FlatList
                    data={WEBs}
                    renderItem={({ item }) => <Card data={item} handleClick={() => handleLink(item)} />}
                    ItemSeparatorComponent={<View style={{ height: 10 }}></View>}
                    style={styles.list}
                />
                <View style={styles.footer}>
                    <Card data={whatssap} square handleClick={() => handleLink(whatssap)} />
                    <Card data={email} square handleClick={() => handleLink(email)} />
                </View>

                <ContactModal visible={visiible} setVisible={setVisible} contact={app} />
            </View>
        </SafeAreaView>
    );
}

function Card({ data, square, handleClick }) {

    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={[styles.card, { width: square ? 70 : "100%", justifyContent: square && "center" }]}
            onPress={handleClick}
        >
            <Ionicons name={data.logo} size={32} color={data.color} />
            {!square &&
                <Text style={styles.cardTitle}>
                    {data.name}
                </Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
    },
    body: {
        flex: 1,
        width: '100%',
        backgroundColor: "#fff",
        marginTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 50
    },
    list: {
        width: '100%',
    },
    footer: {
        width: "100%",
        position: 'relative',
        top: -45,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    card: {
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
