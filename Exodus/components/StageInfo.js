import React from 'react';
import { ScrollView, Text, View, StyleSheet, YellowBox, Dimensions } from 'react-native';
import { stageInfo } from '../data';

export default class StageInfo extends React.Component {
    render() {
        return (
            <ScrollView pagingEnabled={true} horizontal={true} style={styles.container} >
                {stageInfo.info.map((info,index)=>(
                    <View key={index} style={styles.block}>
                        <Text style={styles.title}>{info.title}</Text>
                        <View style={styles.content}>
                            <ScrollView >
                                {info.data.map((data,index)=>{
                                    switch(data.type){
                                        case 'stage': return <Stage key={index} data={data.stages} />
                                        case 'sand-pumped': return <SandPumped key={index} data={data['sand-types']} />
                                        case 'sand-in-movers': return <SandInMovers key={index} data={data['sand-types']} />
                                    }
                                })}
                            </ScrollView>
                        </View>
                    </View>                    
                ))}
            </ScrollView>
        )
    }
}

class SandInMovers extends React.Component{
    render(){
        return (
            <View >
                <Text style={styles.infoLabel}>Sand In Movers</Text>
                {this.props.data.map((item,index)=>(
                    <View key={index} >
                        <Text>{item.type}</Text>
                        <Text style={styles.infoLabel}>{item.title}</Text>
                        {item.attributes.map((attribute,index)=>(
                            <Text key={index} style={styles.infoLabel}>{attribute}</Text>
                        ))}
                    </View>
                ))}
                <View><Text>----------------------</Text></View>
            </View>
        );
    }
}

class SandPumped extends React.Component{
    render(){
        return (
            <View >
                <Text style={styles.infoLabel}>Sand Pumped</Text>
                {this.props.data.map((item,index)=>(
                    <View key={index} >
                        <Text>{item.type}</Text>
                        {item.attributes.map((attribute,index)=>(
                            <Text key={index} style={styles.infoLabel}>{attribute}</Text>
                        ))}
                    </View>
                ))}
                <View><Text>----------------------</Text></View>
            </View>
        );
    }
}

class Stage extends React.Component{
    render(){
        return (
            <View >
                {this.props.data.map((item,index)=>(
                    <React.Fragment key={index} >
                        <Text style={styles.infoLabel} >{item.label}</Text>
                        <Text>{item.value}</Text>
                    </React.Fragment>
                ))}
                <View><Text>----------------------</Text></View>
            </View>
        );
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
        backgroundColor: '#cccccc',
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