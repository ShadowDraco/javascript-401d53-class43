import { Box, Text, Button, VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import { bgImageLight } from '../utils/images';

export default function HomeScreen({ navigation }) {
  return (
    <Box
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
      }}
    >
      <ImageBackground
        source={bgImageLight}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <Text
          textAlign={'center'}
          fontSize='xl'
        >
          Welcome to Youth Connect!
        </Text>

        <VStack
          space={4}
          alignItems='center'
        >
          <Button
            width='105px'
            onPress={() => navigation.navigate('Login')}
          >
            Log In
          </Button>

          <Button onPress={() => navigation.navigate('Rooms')}>
            Join a room
          </Button>
        </VStack>
      </ImageBackground>
    </Box>
  );
}
