import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CarItem from './components/Caritem';
//import StyledButton from './components/StyledButton';
//const image={uri:'https://images.unsplash.com/photo-1566367576585-051277d52997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'};
import CarList from './components/CarList';

export default function App() {
  return (
    <View style={styles.container}>
  {/* <CarItem
  name={"Model 3"}
  tagline={"Starting from Rs.9,99,900"}
  image={require('./assets/images/Model3.jpeg')}
  /> */}
  <CarList />
  
    <StatusBar style='auto' />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
