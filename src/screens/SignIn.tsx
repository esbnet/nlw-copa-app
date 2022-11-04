import React from "react"
import { Center, Icon, Text } from "native-base"
import { Fontisto } from "@expo/vector-icons"
import { useAuth } from "../hooks/useAuth"

import LogoImg from "../assets/logo.svg"
import { Button } from "../components/Button"

export function SignIn() {
  const { signIn, user } = useAuth()

  console.log('Dados do usuário : ', user)
  return (
    <Center flex={1} bgColor='gray.900' p={7}>
      <LogoImg width={212} height={40} />
      <Button
        title='ENTRAR COM GOOGLE'
        leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />}
        type='SECONDARY'
        marginTop={12}
        onPress={signIn}
      />
      <Text color='white' textAlign='center' mt={4}>
        Não utilizamos nenhuma informação além do seu e-mail para a criação da
        conta
      </Text>
    </Center>
  )
}
