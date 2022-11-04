import { VStack, Text, Heading } from "native-base"

import LogoImg from "../assets/logo.svg"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"

export function New() {
  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title='Criar novo bolão' showBackButton />

      <VStack mt={8} mx={5} alignItems='center'>
        <LogoImg  />

        <Heading fontFamily="heading" color={'white'} fontSize="xl" my={8} textAlign="center"> 
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>
        <Input mb={2} placeholder="Qual o nome do seu bolão?"/>
        <Button title='CRIAR MEU BOLÃO'></Button>

        <Text color='gray.200' textAlign='center' mt={4} fontSize='sm' px={10}>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}
