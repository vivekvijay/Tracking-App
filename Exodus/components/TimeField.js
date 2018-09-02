import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class TimeField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.value
        }
    }
    render() {
        let props = this.props,
            timeStyle = [styles.container];
        if (props.styleClass)
            timeStyle.push(props.styleClass);
        return (
            <TouchableHighlight onPress={props.onTimerClick} style={timeStyle}>
            <>
                <View style={styles.block}>
                    <Text style={styles.timeField}>{props.value && props.value[0]}</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.timeField}>{props.value && props.value[1]}</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.timeField}>{props.value && props.value[2]}</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.timeField}>{props.value && props.value[3]}</Text>
                </View>
                </>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 120,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: 'grey',
        height: 25
    },
    block: {
        flex: 1,
        borderRightWidth: 2,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeField: {
        fontSize: 13
    }
});