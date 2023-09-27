import { useSetRecoilState, useRecoilValue } from 'recoil';
import { keywordState } from '@/src/recoil/searchKeyword/atoms';
import { ChangeEvent, KeyboardEvent } from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import { Input, Box, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'

export const SearchInput = () => {
  const keyword = useRecoilValue(keywordState)
  const setKeyword = useSetRecoilState(keywordState)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { origin } = window.location;
    const key = event.code;
    switch(key){
      case 'Enter':
        window.location.href = `${origin}/search?keyword=${keyword}`;
      break;
      default:
    }
  }
  
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
          value={keyword}
          onChange={(event) => handleChange(event)}
          onKeyDown={(event) => handleKeyDown(event)}
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
