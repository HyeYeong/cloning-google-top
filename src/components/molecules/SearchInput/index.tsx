import { useRecoilState } from 'recoil';
import { ChangeEvent } from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import { Input, Box, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'

export const SearchInput = () => {

  return (
    <Stack>
      <InputGroup
        width={'100%'}
      >
        <InputLeftElement
          pointerEvents='none'
          padding={'23px 20px 23px 30px'}
        >
          <SearchIcon color='gray.800' />
        </InputLeftElement>
        <Input
          type='text'
          borderRadius={'full'}
          fontSize={'16px'}
          borderWidth={0}
          bgColor={'#fff'}
          boxShadow={'rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 3px'}
          padding={'23px 20px 23px 50px'}
          placeholder='Search Movie name or anything URL'
          _placeholder={{ opacity: 1, color: 'gray.700' }}
        />
      </InputGroup>
    </Stack>
  )
};
