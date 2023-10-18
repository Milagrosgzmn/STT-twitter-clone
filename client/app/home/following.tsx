import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import Post from '../../components/post/postTemplate';
import { ScrollView } from 'react-native-gesture-handler';

export default function FollowingScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>followers only</Text>
        <Post/>
      </View>
    </ScrollView>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
