import {
    FlatList,
    Linking,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { Header } from './Header';
import { useEffect, useState } from 'react';

import email from 'react-native-email'

export function ContactModal({ visible, setVisible, contact }) {
    const [value, setValue] = useState(undefined)

    const handleVisible = () => setVisible(!visible)

    useEffect(() => {
        setValue(undefined)
    }, [visible])

    function sendMensage() {
        if (contact === "Email") return sendEmail()

        if(contact === "WhatsApp") return sendMsg()

    }

    function sendEmail() {
        const to = 'erikjhow.ed@gmail.com'

        email(to, {
            subject: "Acabei de ver seu app",
            body: value
        })
    }

    function sendMsg(){
        const phone = 5538988668903
        Linking.openURL(`https://api.whatsapp.com/send?phone=${phone}&text=${value}`)
    }

    return (
        <Modal visible={visible} animationType='slide' >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Header image={false} />
                    <View style={styles.body}>
                        <Text style={styles.icon} onPress={handleVisible}>x</Text>

                        <TextInput
                            multiline
                            numberOfLines={8}
                            style={styles.input}
                            placeholderTextColor="#8c8c8c"
                            placeholder="Digite sua mensagem"
                            value={value}
                            onChangeText={(e) => setValue(e)}
                            textAlignVertical="top"
                        />
                        {/* <Text>{contact}</Text> */}

                        <TouchableOpacity
                            activeOpacity={.7}
                            style={styles.button}
                            onPress={sendMensage}
                        >
                            <Text style={styles.text}>Enviar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
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
    icon: {
        position: 'absolute',
        fontSize: 35,
        fontWeight: "bold",
        color: "#000",
        top: 5,
        right: 20
    },
    input: {
        width: "100%",
        borderRadius: 8,
        borderColor: "#333333",
        borderWidth: 1,
        padding: 18,
        color: "#8c8c8c",
        fontSize: 18,
        marginTop: 10
    },
    button: {
        width: 120,
        backgroundColor: "#3BBAF5",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 12,
        alignSelf: 'flex-start'
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    }
})
