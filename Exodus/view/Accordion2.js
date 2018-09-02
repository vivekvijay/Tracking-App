import React from 'react';
import { ScrollView, View, Text, StyleSheet, YellowBox, Dimensions, WebView, TouchableHighlight } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import WellInfo from '../components/WellInfo';
import Material from '../components/Material';
import StageInfo from '../components/StageInfo';
import Storage from '../components/Storage';
import StopWatch from '../components/StopWatch';
// import { levels } from '../data';

const window = Dimensions.get('window');
const windowHeight = window.height;
const dragDrop = require('../dnd/index.html');


let levels = [
    {
        tab: 1,
        collapsed: false,
        header: {
            backgroundColor: '#9cfce2',
            panels: [
                {
                    title: 'WELL INFO'
                },
                {
                    title: 'STAGE INFO'
                }
            ]
        },
        content: <View style={{ height: '100%', flexDirection: 'row', flex: 1 }} >
            <View style={{
                backgroundColor: '#fff',
                flex: 1,
                height: '100%'
            }}>
                <WellInfo />
            </View>
            <View style={{
                backgroundColor: '#3fffca',
                flex: 1,
                height: '100%'
            }}>
                <StageInfo />
            </View>
        </View>
    },
    {
        tab: 2,
        collapsed: true,
        header: {
            backgroundColor: '#cdfdef',
            panels: [
                {
                    title: 'MATERIAL'
                },
                {
                    title: 'STORAGE'
                }
            ]
        },
        content: <View style={{
            flex: 1
        }}>
            {/* <WebView
                originWhitelist={['*']}
                source={dragDrop}
                scrollEnabled={true}
                style={{ flex: 1, height: '100%' }} /> */}
            <WebView
                // source={{ uri: 'https://vivekvijay.github.io' }}
                source={{ uri: './external/dnd/index.html' }}
                scrollEnabled={true}
                style={{ flex: 1, height: '100%' }} />
        </View>
    },
    {
        tab: 3,
        collapsed: false,
        header: {
            backgroundColor: '#ededed',
            panels: [
                {
                    title: 'STOP WATCH'
                }
            ]
        },
        content: <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }} >
            {/* <Text style={{ fontSize: 25 }}>Upcoming feature</Text> */}
            <StopWatch />
        </View>
    }
];

export default class AccordionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accordion1: false,
            accordion2: false
        };
    }
    onHeaderClick() {
        this.setState({ accordion1: !this.state.accordion1, accordion2: false, accordion3: false })
    }

    onAccordion2Click() {
        this.setState({ accordion1: false, accordion2: !this.state.accordion2, accordion3: false })
    }

    onAccordion3Click() {
        this.setState({ accordion1: false, accordion2: false, accordion3: !this.state.accordion3 })
    }
    getHeader(level, index, isActive) {
        return (
            <View style={[styles.panelHeader, { backgroundColor: level.header.backgroundColor }]} >
                {
                    level.header.panels.map((panel, index) => (
                        <View key={index} style={styles.panelHeaderTitle}>
                            <Text style={styles.panelHeaderTitleText}>{panel.title}</Text>
                        </View>
                    ))
                }
            </View>
        );
    }
    getContent(level, index, isActive) {
        let style = isActive ? styles.active : styles.inActive;
        return (<View style={style} >
            {level.content}
        </View>);
    }
    render() {
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
        // let PolicyHTML = require('../dnd/index.html');
        // PolicyHTML = require('../dnd/test.html');
        return (
            // <Accordion sections={levels}
            //  // initiallyActiveSection={1}
            //  onChange={()=>{debugger;return false;}}
            //  renderHeader={this.getHeader}
            //  renderContent={this.getContent}
            // />
            <View style={styles.mainWrapper}>

                <View style={this.state.accordion1 == true ? styles.activeAccordion : styles.accordionContainer} >
                    <TouchableHighlight style={[styles.accordionHeader]}
                        onPress={this.onHeaderClick.bind(this)}>

                        <View style={[styles.panelHeader, { backgroundColor: '#9cfce2' }]}>
                            <View style={styles.panelHeaderTitle}>
                                <Text style={styles.panelHeaderTitleText}>WELL INFO</Text>
                            </View>
                            <View style={styles.panelHeaderTitle}>
                                <Text style={styles.panelHeaderTitleText}>STAGE INFO</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={this.state.accordion1 == true ? styles.activeAccordionBody : styles.accordionBody} >
                        <View style={{
                            backgroundColor: '#fff',
                            flex: 1,
                            height: '100%'
                        }}>
                            <WellInfo />
                        </View>
                        <View style={{
                            backgroundColor: '#3fffca',
                            flex: 1,
                            height: '100%'
                        }}>
                            <StageInfo />
                        </View>
                    </View>
                </View>

                <View style={this.state.accordion2 ? styles.activeAccordion : styles.accordionContainer} >

                    <TouchableHighlight style={[styles.accordionHeader]}
                        onPress={this.onAccordion2Click.bind(this)}>

                        <View style={[styles.panelHeader, { backgroundColor: '#cdfdef' }]}>
                            <View style={styles.panelHeaderTitle}>
                                <Text style={styles.panelHeaderTitleText}>MATERIAL</Text>
                            </View>
                            <View style={styles.panelHeaderTitle}>
                                <Text style={styles.panelHeaderTitleText}>STORAGE</Text>
                            </View>

                        </View>
                    </TouchableHighlight>
                    <View  style={this.state.accordion2 == true ? styles.activeAccordionBody : styles.accordionBody} >
                        <WebView
                            source={{ uri: 'https://vivekvijay.github.io' }}
                            // source={PolicyHTML}
                            scrollEnabled={true}
                            style={{ flex: 1, height: '100%' }} />
                    </View>
                </View>

                <View style={this.state.accordion3 ? styles.activeAccordion : styles.accordionContainer} >

                    <TouchableHighlight style={[styles.accordionHeader]}
                        onPress={this.onAccordion3Click.bind(this)}>

                        <View style={[styles.panelHeader, { backgroundColor: '#ededed' }]}>
                            <View style={styles.panelHeaderTitle}>
                                <Text style={styles.panelHeaderTitleText}>STOP WATCH</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View  style={this.state.accordion3 == true ? styles.activeAccordionBody : styles.accordionBody} >
                        <StopWatch />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1
	},
	accordionHeader:{
		height: 50
	},
    accordionContainer: {
        height: 50,
        overflow:'hidden'
	},
	accordionBody:{
		height: 0,
		opacity:0,
        flexDirection: 'row',
        flex: 1
	},
	activeAccordionBody:{
		height: windowHeight - 150 - 20,
		opacity:1,
        flexDirection: 'row',
        flex: 1
	},
    panelHeader: {
        height: 50,
        flexDirection: 'row',
        flex: 1
    },
    panelHeaderTitle: {
        flex: 1,
        alignItems: 'center'
    },
    panelHeaderTitleText: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold'
    },
    leftBlock: {
        backgroundColor: '#fff',
        width: '50%',
        height: '100%'
    },
    rightBlock: {
        backgroundColor: '#3fffca',
        width: '50%',
        height: '100%'
    },
    inActive: {
        height: 0
    },
    active: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        minHeight: windowHeight - 150 - 20
    },
    activeAccordion: {
        height: windowHeight - 100 - 20
    }
});
