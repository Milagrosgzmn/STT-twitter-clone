import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import Post from '../../components/post/postTemplate';

export default function LatestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>latest</Text>
      <Post  /><Post  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
