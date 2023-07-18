import 'react-native-gesture-handler'
import { NativeBaseProvider } from 'native-base'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/Home'
import RoomList from './screens/RoomList'
import Login from './screens/Login'
import { useState } from 'react'
import Room from './screens/Room'

const Stack = createNativeStackNavigator()

export default function App() {
  const [user, setUser] = useState(null)
  //? Runs whenever there is new trigger from the backend
  /*
  useEffect(() => {
    socket.on('roomsList', rooms => {
      setRooms(rooms)
    })
  }, [socket])
  */

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='RoomList' component={RoomList} />
          <Stack.Screen name='Room' component={Room} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
