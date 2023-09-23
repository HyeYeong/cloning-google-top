import Head from 'next/head';
import { Box, Center } from '@chakra-ui/layout';
import { BadgeIcons } from "@/src/components/organisms/BadgeIcons"
import { SearchInput } from "@/src/components/molecules/SearchInput"
import { NavigationTop } from "@/src/components/organisms/NavigationTop"
import { Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>study-recoil</title>
      </Head>
      <main>
        <Box bgColor={'#eee'} w='100%' h='100%' position={'relative'} display={'block'}>
          <Box>
            <NavigationTop/>
          </Box>
          <Center mb='30px'>
            <Image
              w='272px'
              h='92px'
              src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
            />
          </Center>
          <Center mb='30px' w="100%">
            <SearchInput/>
          </Center>
          <Center mb='30px'>
            <BadgeIcons/>
          </Center>
        </Box>
      </main>
    </div>
  )
}
