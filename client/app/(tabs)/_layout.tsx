import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Tabs } from 'expo-router';
import { Pressable, useColorScheme,Image } from 'react-native';

import logo from '../../assets/images/sttlogo.png';  

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const conditionalColor = colorScheme === 'light' ? 'black' : 'white';
  const headerTitle = () => (
    <Image source={logo} style={{ width: 60, height: 70, marginBottom:6,  tintColor: conditionalColor }} />
  );
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerLeft: () => (
          <Pressable>
            {({ pressed }) => (<DrawerToggleButton tintColor={conditionalColor}/>
            )}
          </Pressable>
      ),
      headerTitleAlign: 'center', // Center-align the header title
      headerTitle, // Use the custom header title component
      
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="envelope-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
