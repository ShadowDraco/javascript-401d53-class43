import { VStack, Box, Text, Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function Room({ route, navigation }) {
  const { roomName } = route.params

  const [messages, setMessages] = useState([])
  useEffect(() => {
    function fetchMessages() {
      fetch(`https://youth-connect-backend.onrender.com/api/v1/messages`)
        .then(res => res.json())
        .then(data => {
          let filteredMessages = data.filter(
            message => message.room === roomName
          )
          console.log('got messages')
          setMessages(filteredMessages)
        })
        .catch(err => console.error(err))
    }

    fetchMessages()
  }, [])
  return (
    <Box>
      <Text>You are in room: {roomName}</Text>
      <ScrollView maxH={200}>
        <VStack mt={5} mb={10} space={4} alignItems='center'>
          {messages.length > 0 &&
            messages.map((message, i) => {
              return (
                <Center
                  w='80'
                  bg={`rgb(${10 * i + 50}, ${5 * i + 50}, ${5 * i + 50})`}
                  rounded='md'
                  shadow={3}
                >
                  <Text key={i} fontSize={'md'}>
                    {message.text}
                  </Text>
                </Center>
              )
            })}
        </VStack>
      </ScrollView>
    </Box>
  )
}
