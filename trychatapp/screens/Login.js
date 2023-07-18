import { Box, FormControl, Input, Text } from 'native-base'
import React from 'react'

export default function Login() {
  return (
    <Box>
      <Text>Sign in</Text>
      <FormControl>
        <Input placeholder='username' type='text' />
        <Input placeholder='password' type='password' />
      </FormControl>
    </Box>
  )
}
