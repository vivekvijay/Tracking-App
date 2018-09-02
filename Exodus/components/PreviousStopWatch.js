import React from 'react';
import { ScrollView, View, Text, StyleSheet, YellowBox, Dimensions, WebView, TouchableOpacity,TouchableHighlight, DatePickerIOS, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TimeField from './TimeField';
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.value
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.click}>
                {this.props.value && <Image style={{ height: 90, width: 120 }} source={require('../images/on-img.png')} />}
                {!this.props.value && <Image style={{ height: 90, width: 120 }} source={require('../images/off-img.png')} />}
            </TouchableOpacity>
        );
    }
}

class DatePicker extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DateTimePicker
                    mode='date'
                    titleIOS='Pick a Date'
                    titleStyle={{ fontSize: 22 }}
                    isVisible={this.props.isVisible}
                    onConfirm={this.props.handleConfirm}
                    onCancel={this.props.handleCancel}
                />
            </View>
        );
    }
}
class TimePicker extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DateTimePicker
                    mode='time'
                    titleIOS='Pick a Time'
                    titleStyle={{ fontSize: 22 }}
                    isVisible={this.props.isVisible}
                    onConfirm={this.props.handleConfirm}
                    onCancel={this.props.handleCancel}
                />
            </View>
        );
    }
}
export default class AccordionView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wirelineSwitchStatus: true,
            sandPumpedSwitchStatus: true,
            showTimer: false,
            showDatePicker: false,
            timerActivatedFor: null,
            datePickerActivatedFor: null,
            timer1: '0915',
            timer2: '1115',
            timer3: '1230',
            timer4: '0240',
            date1: '14/10/2018',
            date2: '14/10/2018',
            date3: '14/10/2018',
            date4: '14/10/2018'
        }
    }
    toggleWirelineSwitch() {
        this.setState({ wirelineSwitchStatus: !this.state.wirelineSwitchStatus })
    }
    toggleSandPumpedSwitch() {
        this.setState({ sandPumpedSwitchStatus: !this.state.sandPumpedSwitchStatus })
    }
    onTimerClick(index) {
        this.setState({ showTimer: !this.state.showTimer, timerActivatedFor: index })
    }
    onTimerConfirm(date) {
        let hour = date.getHours(),
            minute = date.getMinutes();
        if (hour < 10)
            hour = `0${hour}`;
        if (minute < 10)
            minute = `0${minute}`;

        switch (this.state.timerActivatedFor) {
            case 1: this.setState({ timer1: `${hour}${minute}` });
                break;
            case 2: this.setState({ timer2: `${hour}${minute}` });
                break;
            case 3: this.setState({ timer3: `${hour}${minute}` });
                break;
            case 4: this.setState({ timer4: `${hour}${minute}` });
                break;
        }
        this.setState({ showTimer: !this.state.showTimer })
    }
    onTimerCancel() {
        this.setState({ showTimer: false })
    }
    onDatePickerClick(index) {
        this.setState({ showDatePicker: !this.state.showDatePicker,datePickerActivatedFor:index });
    }
    onDatePickerConfirm(selectedDate) {
        let day = selectedDate.getDate(),
            month = selectedDate.getMonth() + 1,
            year = selectedDate.getFullYear(),
            date;

        if (day < 10)
            day = `0${day}`;
        if (month < 10)
            month = `0${month}`;

        date = `${day}/${month}/${year}`;


        switch (this.state.datePickerActivatedFor) {
            case 1: this.setState({ date1: `${date}` });
                break;
            case 2: this.setState({ date2: `${date}` });
                break;
            case 3: this.setState({ date3: `${date}` });
                break;
            case 4: this.setState({ date4: `${date}` });
                break;
        }
        this.setState({ showDatePicker: !this.state.showDatePicker })
    }
    onDatePickerCancel() {
        this.setState({ showDatePicker: false })
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.child}>
                    <View style={styles.topArea}>
                    </View>
                    <View style={styles.middleArea}>
                        <View style={styles.switchContainer}>
                            <Text style={styles.title}>ON WELL</Text>
                            <Switch value={this.state.wirelineSwitchStatus} click={this.toggleWirelineSwitch.bind(this)} />
                        </View>
                        <View style={styles.switchContainer}>
                            <Switch value={!this.state.wirelineSwitchStatus} click={this.toggleWirelineSwitch.bind(this)} />
                            <Text style={styles.title}>OFF WELL</Text>
                        </View>

                    </View>
                    <View style={styles.bottomArea}>
                        <View style={styles.timerContainer}>
                            <TimeField value={this.state.timer1} styleClass={styles.timerSpacer}
                                onTimerClick={this.onTimerClick.bind(this, 1)}
                            />
                            <TimeField value={this.state.timer2} styleClass={styles.timerSpacer}
                                onTimerClick={this.onTimerClick.bind(this, 2)}
                            />
                        </View>
                        <View style={styles.timerContainer}>
                            <TouchableHighlight onPress={this.onDatePickerClick.bind(this,1)} style={styles.timerSpacer}>
                                <Text style={styles.timeField}>{this.state.date1}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this.onDatePickerClick.bind(this,2)} style={styles.timerSpacer}>
                                <Text style={styles.timeField}>{this.state.date2}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <TimePicker
                        isVisible={this.state.showTimer}
                        handleCancel={this.onTimerCancel.bind(this)}
                        handleConfirm={this.onTimerConfirm.bind(this)}
                    />

                    <DatePicker
                        isVisible={this.state.showDatePicker}
                        handleCancel={this.onDatePickerCancel.bind(this)}
                        handleConfirm={this.onDatePickerConfirm.bind(this)}
                    />
                </View>
                <View style={styles.child}>
                    <View style={styles.topArea}>
                    </View>
                    <View style={styles.middleArea}>
                        <View style={styles.switchContainer}>
                            <Text style={styles.title}>START</Text>
                            <Switch value={this.state.sandPumpedSwitchStatus} click={this.toggleSandPumpedSwitch.bind(this)} />
                        </View>
                        <View style={styles.switchContainer}>
                            <Switch value={!this.state.sandPumpedSwitchStatus} click={this.toggleSandPumpedSwitch.bind(this)} />
                            <Text style={styles.title}>OFF</Text>
                        </View>
                    </View>
                    <View style={styles.bottomArea}>
                        <View style={styles.timerContainer}>
                            <TimeField value={this.state.timer3} styleClass={styles.timerSpacer}
                                onTimerClick={this.onTimerClick.bind(this, 3)}
                            />
                            <TimeField value={this.state.timer4} styleClass={styles.timerSpacer}
                                onTimerClick={this.onTimerClick.bind(this, 4)}
                            />
                        </View>
                        <View style={styles.timerContainer}>
                            <TouchableHighlight onPress={this.onDatePickerClick.bind(this,3)} style={styles.timerSpacer}>
                                <Text style={styles.timeField}>{this.state.date3}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this.onDatePickerClick.bind(this,4)} style={styles.timerSpacer}>
                                <Text style={styles.timeField}>{this.state.date4}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'
    },
    title: {
        fontSize: 16
    },
    timerSpacer: {
        marginRight: 10
    },
    child: {
        flexDirection: 'column',
        flex: 1,
        borderWidth: 1,
        borderColor: 'transparent',
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: 15,
        paddingBottom: 15,
    },
    topArea: {
        flex: 1
    },
    middleArea: {
        backgroundColor: '#ededed',
        borderRadius: 10,
        height: 150,
        borderWidth: 2,
        borderColor: '#999999',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    switchContainer: {
        alignItems: 'center'
    },
    bottomArea: {
        height: 100
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});