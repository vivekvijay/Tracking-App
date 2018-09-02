import React from 'react';
import { ScrollView, Text, View, StyleSheet, YellowBox, Dimensions } from 'react-native';

export default class Storage extends React.Component {
    render() {
        const window = Dimensions.get('window'),
            windowWidth = window.width,
            windowHeight = window.height;

        const storageDetails = [
            {
                name: 'OUTSIDE#33124',
                compartments: [
                    {
                        id: 'COMPARTMENT #4',
                        well: '20/40 WHITE',
                        capacity: '47,280 LBS',
                        type: 1,
                        records: [
                            {
                                no: '3115',
                                name: 'D&J'
                            }
                        ]
                    },
                    {
                        id: 'COMPARTMENT #3',
                        well: '20/40 WHITE',
                        capacity: '46,920 LBS',
                        type: 1
                    },
                    {
                        id: 'COMPARTMENT #4',
                        well: '40/70 CRC',
                        type: 2,
                        capacity: '95,480 LBS'
                    },
                    {
                        id: '',
                        type: 2,
                        records: [
                            {
                                no: '3115',
                                name: 'D&J'
                            }
                        ]
                    }
                ]

            },
            {
                name: 'OUTSIDE#33124',
                compartments: [
                    {
                        id: 'COMPARTMENT #4',
                        well: '20/40 WHITE',
                        capacity: '47,280 LBS',
                        type: 1,
                        records: [
                            {
                                no: '3115',
                                name: 'D&J'
                            }
                        ]
                    },
                    {
                        id: 'COMPARTMENT #3',
                        well: '20/40 WHITE',
                        capacity: '46,920 LBS',
                        type: 1
                    },
                    {
                        id: 'COMPARTMENT #4',
                        well: '40/70 CRC',
                        type: 2,
                        capacity: '95,480 LBS'
                    },
                    {
                        id: '',
                        type: 2,
                        records: [
                            {
                                no: '3115',
                                name: 'D&J'
                            }
                        ]
                    }
                ]

            }
        ];
        return (
            <ScrollView pagingEnabled={true} horizontal={true} style={styles.container} >

                {
                    storageDetails.map((storage, index) => {
                        return <View key={`storage-${index}`} style={styles.well}>
                            <Text style={styles.wellName}>{storage.name}</Text>
                            {storage.compartments.map((compartment, c) => {
                                return <View key={c} style={compartment.type == 1 ? styles.container1 : styles.container2}>
                                    <View style={styles.headerContainer}>
                                        <Text style={styles.text}>{compartment.id}</Text>
                                    </View>
                                    <View style={styles.compartmentContent}>
                                        <Text style={styles.compartmentID}>{compartment.well}</Text>
                                        <View style={styles.block}>
                                            {compartment.records && compartment.records.map((record, j) => {
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
                                        <Text style={styles.compartmentID}>{compartment.capacity}</Text>
                                    </View>
                                </View>
                            })
                            }
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
        marginTop: 8,
        marginBottom: 10
    },
    container1: {
        // flex:2.2,
        height: '20%',
        width: '100%',
        borderWidth: 4,
        marginBottom: 8,
        borderColor: '#38a880'
    },
    container2: {
        // flex:3.2,
        height: '25%',
        width: '100%',
        borderWidth: 4,
        marginBottom: 8,
        borderColor: '#38a880'
    },
    headerContainer: {
        width: '100%',
        height: '20%',
        flex: 0.2,
        backgroundColor: '#38a880',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    compartmentID: {
        flex: 1
    },
    compartmentContent: {
        alignItems: 'center',
        backgroundColor: '#cdfdef',
        flex: 0.8,
        paddingLeft: '2%',
        paddingRight: '2%'
    },
    greyText: {
        color: 'grey'
    },
    block: {
        height: '50%'
    },
    subBlock: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 5,
        borderRadius: 15,
        borderColor: '#999999',
        borderWidth: 3,
        height:25,
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
    }
});