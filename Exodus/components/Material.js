import React from 'react';
import { ScrollView, Text, View, StyleSheet, YellowBox, Dimensions } from 'react-native';

export default class Material extends React.Component {
    render() {
        const window = Dimensions.get('window'),
            windowWidth = window.width,
            windowHeight = window.height;

        const wellDetails = [
            {
                name: '20/40 WHITE',
                details: [
                    {
                        time: '0900',
                        records: [
                            {
                                no: '3115',
                                name: 'D&J'
                            },
                            {
                                no: '3222',
                                name: 'D&J'
                            },
                            {
                                no: '3371',
                                name: 'D&J'
                            }
                        ]
                    },
                    {
                        time: '1500',
                        records: [
                            {
                                no: '3363',
                                name: 'D&J'
                            }
                        ]
                    },
                    {
                        time: '2100'
                    }
                ]

            },
            {
                name: '40/70 CRC',
                details: [
                    {
                        time: '0900',
                        records: [
                            {
                                no: '3513',
                                name: 'D&J'
                            },
                            {
                                no: '3531',
                                name: 'D&J'
                            },
                            {
                                no: '7700',
                                name: 'CBA'
                            }
                        ]
                    },
                    {
                        time: '1500',
                        records: [
                            {
                                no: '3566',
                                name: 'D&J'
                            },
                            {
                                no: '3601',
                                name: 'D&J'
                            },
                            {
                                no: '7475',
                                name: 'CBA'
                            }
                        ]
                    },
                    {
                        time: '2100'
                    }
                ]

            },
            {
                name: '40/70 CRC',
                details: [
                    {
                        time: '0900',
                        records: [
                            {
                                no: '3513',
                                name: 'D&J'
                            },
                            {
                                no: '3531',
                                name: 'D&J'
                            },
                            {
                                no: '7700',
                                name: 'CBA'
                            }
                        ]
                    },
                    {
                        time: '1500',
                        records: [
                            {
                                no: '3566',
                                name: 'D&J'
                            },
                            {
                                no: '3601',
                                name: 'D&J'
                            },
                            {
                                no: '7475',
                                name: 'CBA'
                            }
                        ]
                    },
                    {
                        time: '2100'
                    }
                ]

            }
        ];
        return (
            <ScrollView pagingEnabled={true} horizontal={true} style={styles.container} >
                {/* <View style={styles.well}>
                    <Text style={styles.wellName}>1</Text>
                    <View style={styles.wellContent}></View>
                </View>
                <View style={styles.well}>
                    <Text style={styles.wellName}>1</Text>
                    <View style={styles.wellContent}></View>
                </View> */}

                {
                    wellDetails.map((well, index) => {
                        return <View key={`well-${index}`} style={styles.well}>
                            <Text style={styles.wellName}>{well.name}</Text>
                            <View style={styles.wellContent}>
                                {
                                    well.details.map((detail, i) => {
                                        return <View key={i} style={styles.block}>
                                            <Text style={styles.time}>{detail.time}</Text>
                                            {detail.records && detail.records.map((record, j) => {
                                                return <View key={j} style={styles.subBlock}>
                                                    <View style={styles.subBlockText1Container}>
                                                        <Text style={styles.subBlockText1}>{record.no}</Text>
                                                    </View>
                                                    <View style={styles.subBlockText2Container}>
                                                        <Text style={styles.subBlockText2}>{record.name}</Text>
                                                    </View>
                                                </View>
                                            })}

                                        </View>

                                    })
                                }


                            </View>
                        </View>
                    })
                }
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    well: {
        width: Dimensions.get('window').width / 2,
        padding: '2%',
        height: '100%',
        alignItems: 'center'
    },
    wellName: {
        // marginTop: 5,
        marginBottom: 10
    },
    title: {
        color: '#929e9a'
    },
    wellContent: {
        backgroundColor: '#eaeaea',
        borderColor: '#7f7f7f',
        borderWidth: 4,
        height: '95%',
        width: '100%',
        padding: '3%'
    },
    block: {
        height: '32%'
    },
    subBlock: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 5,
        height: 40,
        borderRadius: 15,
        borderColor: '#999999',
        borderWidth: 3,
        flex: 0.25,
        alignItems: 'center'
    },
    subBlockText1Container: {
        width: '65%',
        borderRightWidth: 3,
        borderRightColor: '#999999',
        alignItems: 'center'
    },
    subBlockText2Container: {
        width: '35%',
        alignItems: 'center'
    },
    subBlockText1: {
        fontSize: 20
    },
    subBlockText2: {
        fontSize: 14
    },
    time: {
        color: '#929e9a',
        fontSize:15
    }
});