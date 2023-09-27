import Head from 'next/head';
import { Box} from '@chakra-ui/layout';
import { SearchInput } from "@/src/components/molecules/SearchInput"
import { NavigationTop } from "@/src/components/organisms/NavigationTop"
import { Image, Text } from '@chakra-ui/react'
import { IMAGE_URL } from '@/src/constants'
import Link from 'next/link';

export const ScrollHeader = () => {
  return (
    <Box
    w='100%'
    h='100px'
    position={'relative'}
    padding='10px 20px'
    alignItems={'center'}
    justifyContent={'space-between'}
    display={'flex'}
    boxShadow={'rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 3px'}
    >
    <Box width={'70%'} display={'flex'} alignItems={'center'}>
      <Link href={'/'}>
        <Image
          alt="logo"
          w='80px'
          h='26px'
          src={`${IMAGE_URL}googleLogo.png`}
        />
        <Text color="#34a853" fontWeight={'600'} ml="6px" fontSize={'1.5rem'}>Movie</Text>
      </Link>
      <Box w="80%" maxWidth={'561px'} ml='60px'>
        <SearchInput/>
      </Box>
    </Box>
    <Box>
      <NavigationTop/>
    </Box>
  </Box>
  )  
}

export default ScrollHeader
