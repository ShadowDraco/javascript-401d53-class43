import React, { useState, useLayoutEffect } from 'react'

import { ScrollView, VStack, Center, Button, Text } from 'native-base'
import socket from '../utils/socket'

export default function RoomList({ navigation }) {
  const [rooms, setRooms] = useState([])

  useLayoutEffect(() => {
    function fetchRooms() {
      fetch('https://youth-connect-backend.onrender.com/api/v1/rooms')
        .then(res => res.json())
        .then(data => {
          console.log('got rooms')
          setRooms(data)
        })
        .catch(err => console.error(err))
    }
    fetchRooms()
  }, [])

  return (
    <ScrollView maxH={400}>
      <Text fontSize={'lg'}> Join a room: </Text>
      <VStack mt={5} space={4} alignItems='center'>
        {rooms?.length > 0 &&
          rooms.map((room, i) => {
            return (
              <Button
                key={i}
                bg='inherit'
                onPress={() => {
                  navigation.navigate('Room', { roomName: room.name })
                }}
              >
                <Center
                  w='64'
                  h='20'
                  bg={`indigo.${i + 1}00`}
                  rounded='md'
                  shadow={3}
                >
                  {room.name}
                </Center>
              </Button>
            )
          })}
      </VStack>
    </ScrollView>
  )
}
