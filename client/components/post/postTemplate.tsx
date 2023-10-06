import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import userdefault from '../../assets/images/user_default.png';  

const Post = () => {
  const colorScheme = useColorScheme();
  const conditionalColor = colorScheme === 'light' ? 'black' : 'white';
  const fontWeight = conditionalColor === 'black' ? 'bold' : 'normal';
  const dogpic: string =
    'https://media-be.chewy.com/wp-content/uploads/2022/09/27100424/cavalier-king-charles-spaniel-cute-dogs.jpg';

  return (
    <View style={{ borderWidth: 1, borderColor: 'grey', width: 350,borderRadius:5,  }}>
      <View style={{flex:1,flexDirection:'row',  }}>
        <Image source={userdefault} style={{height:40,width:40, margin:5,}}/>
        <View style={{flex:1,flexDirection:'row', justifyContent:'space-between'  }}><Text style={[styles.title, { color: conditionalColor, fontWeight, fontSize:12, }]}>Luca Rey</Text>
        <Text style={[styles.title, { color: conditionalColor, fontWeight, fontSize:12, }]}>5 Oct 2023</Text>
        </View>
        <View style={{position:'absolute', paddingLeft:41, paddingTop:20,}}><Text style={[styles.title, { color: 'grey', fontWeight, fontSize:11,   }]}>@LucaWolfV2</Text></View>
      </View>
      
      <Text style={[styles.title, { color: conditionalColor, fontWeight }]}>
        Hello! My name is Luca! Welcome to Spill The Tea! Here's a picture of a cute dog! #socute
      </Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: dogpic }} style={styles.image} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 12,
    padding: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageContainer: {
    alignItems: 'center', // Center align horizontally
    justifyContent: 'center', // Center align vertically
  },
  image: {
    width: 280,
    height: 180,
    margin: 10,
    borderRadius:5,
  },
});
