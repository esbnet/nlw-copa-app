import { useCallback, useState } from "react"
import { Octicons } from "@expo/vector-icons"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { Icon, VStack, useToast, FlatList } from "native-base"

import { api } from "../services/api"

import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Loading } from "../components/Loading"
import { PollCard, PollCardProps } from "../components/PollCard"
import { EmptyPollList } from "../components/EmptyPollList"

export function Polls() {
  const [isLoading, setIsLoading] = useState(true)
  const [polls, setPolls] = useState<PollCardProps[]>([])
  const { navigate } = useNavigation()

  const toast = useToast()

  async function fetchPolls() {
    try {
      setIsLoading(true)
      const response = await api.get("/polls")
      setPolls(response.data.polls)
    } catch (error) {
      toast.show({
        title: "Atenção!",
        description: "Não foi possível listar os bolões.",
        bgColor: "red.500",
      })

      console.log(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPolls()
    }, [])
  )

  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title='Meus bolões' />

      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor='gray.600'
        pb={4}
        mb={4}
      >
        <Button
          title='BUSCAR BOLÃO POR CÓDIGO'
          leftIcon={
            <Icon as={Octicons} name='search' color='black' size='md' />
          }
          onPress={() => navigate("find")}
        />
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={polls}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PollCard data={item} />}
          px={3}
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ pb: 10 }}
          ListEmptyComponent={<EmptyPollList />}
        />
      )}
    </VStack>
  )
}
