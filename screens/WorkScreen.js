import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Work Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WorkScreen;