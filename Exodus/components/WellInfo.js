import React from 'react';
import { ScrollView, Text, View, StyleSheet, YellowBox, Dimensions } from 'react-native';
import { wellInfo } from '../data';

export default class WellInfo extends React.Component {
    render() {
        return (
            <ScrollView pagingEnabled={true} horizontal={true} style={styles.container} >
                {wellInfo.types.map((type,index)=>(
                    <View key={index} style={styles.block}>
                        <Text style={styles.title}>{type.title}</Text>
                        <View style={styles.content}>
                            <ScrollView >
                                {type.data.map((info,index)=>(
                                    <View key={index}>
                                        <Text style={styles.infoLabel} >{info.label}</Text>
                                        <Text>{info.value}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>                    
                ))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    block: {
        width: Dimensions.get('window').width / 2,
        paddingBottom: '2%',
        paddingLeft: '2%',
        paddingRight: '2%'
    },
    title: {
        color: '#929e9a',
        flex:0.05,
        textAlign:'center',
        padding:'2%',
    },
    content: {
        backgroundColor: '#cbcbcb',
        borderColor: '#7f7f7f',
        borderWidth: 4,
        flex:0.95,
        paddingTop:'2%',
        paddingBottom:'2%',
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    infoLabel:{
        fontSize:10,
        color:'#808080'
    }
});