import { useRecoilState } from 'recoil';
import { ChangeEvent } from 'react';
import { Input, Box, Icon } from '@chakra-ui/react'

export const SearchInput = () => {

  return (
    <Box display={'flex'}>
      <Input
        borderRadius={'full'}
        maxWidth={'600px'}
        fontSize={'16px'}
        borderWidth={0}
        bgColor={'#fff'}
        boxShadow={'rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 3px'}
        padding={'20px'}
        placeholder='Search Movie name or anything URL'
        _placeholder={{ opacity: 1, color: 'gray.700' }}
      />
    </Box>
  )
};
