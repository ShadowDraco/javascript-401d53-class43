import { VStack, Box, Text, Center, Button } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { bgImageLight } from '../utils/images';
import { Dimensions } from 'react-native';
import { colors } from '../utils/colors';

export default function Room({ route, navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const { roomName } = route.params ? route.params : 'none';

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function fetchMessages() {
      fetch(`https://youth-connect-backend.onrender.com/api/v1/messages`)
        .then(res => res.json())
        .then(data => {
          let filteredMessages = data.filter(
            message => message.room === roomName
          );

          console.log('got messages');
          setMessages(filteredMessages);
        })
        .catch(err => console.error(err));
    }

    fetchMessages();
  }, [roomName]);

  return (
    <Box
      style={{ flex: 1, justifyContent: 'center', height: '100%' }}
      safeArea
    >
      <ImageBackground
        source={bgImageLight}
        resizeMode='cover'
        style={{ flex: 1 }}
      >
        <Box
          backgroundColor={colors.secondary}
          width={windowWidth}
          height={70}
          padding={2}
        >
          {roomName && roomName !== 'none' ? (
            <Text fontSize='md'>You are in room: {roomName}</Text>
          ) : (
            <Text
              textAlign={'center'}
              fontSize={'lg'}
            >
              Please join a room
            </Text>
          )}

          {roomName && roomName !== 'none' && (
            <Button
              size={'sm'}
              onPress={() => {
                setMessages([]);
                route.params.roomName = 'none';
                navigation.navigate('Rooms');
              }}
            >
              Leave
            </Button>
          )}
        </Box>

        <ScrollView maxH={100}>
          <VStack
            mt={10}
            mb={50}
            maxH={200}
            space={4}
            alignItems='center'
            backgroundColor={colors.background}
          >
            {messages.length > 0 &&
              messages.map((message, i) => {
                return (
                  <Center
                    key={i}
                    w='80'
                    bg={colors.backgroundDark}
                    rounded='md'
                    shadow={3}
                  >
                    <Text fontSize={'md'}>{message.text}</Text>
                  </Center>
                );
              })}
          </VStack>
        </ScrollView>
      </ImageBackground>
    </Box>
  );
}
