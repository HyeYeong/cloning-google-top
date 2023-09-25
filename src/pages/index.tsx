import Head from 'next/head';
import { Box, Center } from '@chakra-ui/layout';
import { BadgeIcons } from "@/src/components/organisms/BadgeIcons"
import { SearchInput } from "@/src/components/molecules/SearchInput"
import { NavigationTop } from "@/src/components/organisms/NavigationTop"
import { Image, Text } from '@chakra-ui/react'
import { IMAGE_URL } from '@/src/constansts/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Search Movie App</title>
      </Head>
      <main>
        <Box bgColor={'#eee'} w='100%' h='100%' position={'relative'} display={'block'}>
          <Box padding={'20px'}>
            <NavigationTop/>
          </Box>
          <Center mb='30px'>
            <Image
              alt="logo"
              w='272px'
              h='92px'
              src={`${IMAGE_URL}googleLogo.png`}
            />
            <Text color="#34a853" fontWeight={'600'} ml="20px" fontSize={'5rem'}>Movie</Text>
          </Center>
          <Box m="0 auto 30px" w="80%" maxWidth={'561px'}>
            <SearchInput/>
          </Box>
          <Center mb='30px'>
            <BadgeIcons/>
          </Center>
        </Box>
      </main>
    </div>
  )
}
