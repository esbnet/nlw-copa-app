import { Fontisto } from "@expo/vector-icons"
import { Center, Icon, Text } from "native-base"
import React from "react"
import { useAuth } from "../hooks/useAuth"

import LogoImg from "../assets/logo.svg"
import { Button } from "../components/Button"

export function SignIn() {
  const { signIn, isUserLoading } = useAuth()

  return (
    <Center flex={1} bgColor='gray.900' p={7}>
      <LogoImg width={212} height={40} />
      <Button
        title='ENTRAR COM GOOGLE'
        leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />}
        type='SECONDARY'
        marginTop={12}
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{ _spinner: { color: 'white' } }}
      />
      <Text color='white' textAlign='center' mt={4}>
        Não utilizamos nenhuma informação além do seu e-mail para a criação da
        conta
      </Text>
    </Center>
  )
}
