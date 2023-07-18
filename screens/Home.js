import { Box, Text, Button, VStack, Image } from 'native-base'

export default function HomeScreen({ navigation }) {
  const splashImage = '../assets/splash.png'

  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text position='absolute' top={10} fontSize='xl'>
        Welcome to Youth Connect!
      </Text>

      <VStack space={4} alignItems='center'>
        <Button onPress={() => navigation.navigate('Login')}>Log In</Button>

        <Button onPress={() => navigation.navigate('RoomList')}>
          Join a room
        </Button>
      </VStack>
    </Box>
  )
}
