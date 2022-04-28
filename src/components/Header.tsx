import React from 'react';
import { Center, Box, Heading } from '@chakra-ui/react';
import logo from '../logo.svg';

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {

  return (
    <Center style={{ height: '50px', background: '#319795' }}>
      <Box p='2'>
        <Heading size='md'>
          LRHMeta App
        </Heading>
      </Box>
    </Center>
  )
}

export default Header;