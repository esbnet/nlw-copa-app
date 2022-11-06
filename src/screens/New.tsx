import { Heading, Text, useToast, VStack } from "native-base"
import { useState } from 'react'

import LogoImg from "../assets/logo.svg"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { api } from '../services/api'

export function New() {
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()

  async function handlePollCreate() {
    if (!title.trim()) {

      return toast.show({
        title: "Atenção!",
        description: 'Informe um nome para o bolão.',
        bgColor: 'red.500',
      })
    }

    try {
      setIsLoading(true)

      await api.post('/polls', { title: title })
      toast.show({
        title: "Criação de Bolão!",
        description: 'Seu bolão foi criado com sucesso.',
        bgColor: 'green.500',
      })

      setTitle('')

    } catch (error) {
      console.log(error)

      toast.show({
        title: "Atenção!",
        description: 'Não foi possível criar o bolão.',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title='Criar novo bolão' />

      <VStack mt={8} mx={5} alignItems='center'>
        <LogoImg />

        <Heading fontFamily="heading" color={'white'} fontSize="xl" my={8} textAlign="center">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>
        <Input
          mb={2}
          placeholder="Qual o nome do seu bolão?"
          onChangeText={setTitle}
          value={title}

        />
        <Button
          title='CRIAR MEU BOLÃO'
          onPress={handlePollCreate}
          isLoading={isLoading}
        />

        <Text color='gray.200' textAlign='center' mt={4} fontSize='sm' px={10}>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}
