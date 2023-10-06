import { StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Tabs } from 'expo-router';
import Post from "../../components/post/postTemplate"

export default function Home() {
  
  return (
    
    <View style={styles.container}>
     
      <Text style={styles.title}>Home</Text>
      <Post  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
