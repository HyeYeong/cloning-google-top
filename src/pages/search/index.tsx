import Head from 'next/head';
import type { GetStaticProps, NextPage } from 'next'
import { Box, Center } from '@chakra-ui/layout';
import { BadgeIcons } from "@/src/components/organisms/BadgeIcons"
import { SearchInput } from "@/src/components/molecules/SearchInput"
import { NavigationTop } from "@/src/components/organisms/NavigationTop"
import { Image, Text } from '@chakra-ui/react'
import { IMAGE_URL } from '@/src/constants'
import { MoviesDataType } from '@/src/constants/datas'
import { ScrollHeader } from '@/src/components/organisms/ScrollHeader'
import { GET_MOVIE } from '@/src/queries/movies/queries'
import { initializeApollo } from '@/libs/apolloClient'

interface Props {
  data: MoviesDataType
}

export const Home: NextPage<Props> = ({data}) => {

  console.log(data.movies.map(item => item.title))

  if (!data) return <p className="error">Error :(</p>

  return (
    <div>
      <Head>
        <title>Search Movie App</title>
      </Head>
      <main>
        <ScrollHeader/>

        <Box as='section' w='652px' mt='40px' ml='40px'>
            search result CARD
        </Box>

      </main>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_MOVIE,
  })

  return {
    props: {
      data: data || {},
    },
  }
}