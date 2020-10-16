import React, {useState, Component} from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import CustomButton from './component/customButton.js';
import Viewer from './component/viewer.js';

function App(props) {

  const [count, setCount] = useState(0);
  
    function suma(){
      setCount(count + 1)
    }

    function resta(){
      setCount(count + 1)
    }
  
    return (
       <View style={styles.container}>
         <View style={styles.subcontainer}>
          <CustomButton label='-' action={resta}/>
          <Viewer></Viewer>
          <CustomButton label='+' action={suma}/>
         </View>
       </View>  
      );
    }

const styles = StyleSheet.create({
   container:{
     flex: 1,
     backgroundColor: '#00cec9',
     justifyContent: 'center',
   },
   subcontainer:{
     height: 50,
     width: '100%',
     paddingHorizontal: 10,
     flexDirection: 'row',
   },
   counterContainer:{
     flex: 1,
     backgroundColor: 'black',
     justifyContent: 'center',
     alignItems: 'center',
   },
   counter:{
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
   },
 });

export default App;
