import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React, { useState } from 'react';
// import userdefault from '../../assets/images/user_default.png';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Post = () => {
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  }

  const colorScheme = useColorScheme();
  const conditionalColor = colorScheme === 'light' ? 'black' : 'white';
  const fontWeight = conditionalColor === 'black' ? 'bold' : 'normal';
  const dogpic: string =
    'https://media-be.chewy.com/wp-content/uploads/2022/09/27100424/cavalier-king-charles-spaniel-cute-dogs.jpg';

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={require('../../assets/images/user_default.png')} style={styles.userAvatar} />
        <View style={styles.userInfoText}>
          <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
            <Text style={[styles.userName, { color: conditionalColor }]} numberOfLines={1}>
              Luca Rey
            </Text>
            <Text style={[styles.date, { color: 'grey', marginLeft: 5 }]} numberOfLines={1}>
              5 Oct 2023
            </Text>
          </View>
          <Text style={[styles.username, { color: conditionalColor }]} numberOfLines={1}>
            @LucaRey
          </Text>
        </View>
      </View>
      <Text style={[styles.mainText, { color: conditionalColor }]} numberOfLines={3}>
        Hello! My name is Luca! Welcome to Spill The Tea! Here's a picture of a cute dog! #socute
      </Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: dogpic }} style={styles.image} />
      </View>
      <View style={[styles.userInfoContainer, { marginTop: 15, justifyContent: 'space-evenly' }]}>
        <MaterialIcons name="chat-bubble-outline" size={24} color={conditionalColor} />
        <AntDesign name="retweet" size={24} color={conditionalColor} />
      {liked && <AntDesign name="heart" size={24} color={conditionalColor} onClick={handleLiked}/> }
      {!liked &&       <AntDesign name="hearto" size={24} color={conditionalColor} onClick={handleLiked}/>
 }   
        
        <AntDesign name="upload" size={24} color={conditionalColor} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    width: '100%',
    borderTopWidth: 1,
    padding: 10,
    height: 'auto',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userAvatar: {
    height: 40,
    width: 40,
    marginEnd: 10,
    borderRadius: 20,
  },
  userInfoText: {
    flex: 1,
    flexDirection: 'column',
  },
  userName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'grey',
  },
  username: {
    fontSize: 12,
  },
  mainText: {
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
    width:'100%',
    height:200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    marginBottom: 5,
    resizeMode: 'cover',
    
  },
});
