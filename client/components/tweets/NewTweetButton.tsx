import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

const NewTweetButton: React.FC = () => {
    const [buttonVisible, setButtonVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={buttonVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="What's happening?"
                            multiline
                            numberOfLines={4}
                        />
                        <Button title="Tweet" onPress={() => setButtonVisible(false)} />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setButtonVisible(true)}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    button: {
        position: 'absolute',
        top: height * 0.3, // Adjust the vertical position as a fraction of the screen height
        left: width * 0.5, // Adjust the horizontal position as a fraction of the screen width
        backgroundColor: 'blue',
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textInput: {
        marginBottom: 10,
    },
});

export default NewTweetButton;
