import React from 'react';
import { Flex, Box, HStack, Avatar, Heading, Spacer, Button } from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import logo from '../logo.svg';

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {

  return (
    <Flex bg="teal" align="center" >
      <Spacer />
      <Box p='4'>
        <HStack>
          <Avatar src={logo} />
          <Heading size='md' color='white'>
            LrhMeta App
          </Heading>
        </HStack>
      </Box>
      <Spacer />
      <Box p='4'>
        <HStack spacing={2}>
          <Button variant='link'>
            <FaFacebook size="30" color="white" />
          </Button>
          <Button variant='link'>
            <FaTwitter size="30" color="white" />
          </Button>
        </HStack>
      </Box>
      <Spacer />
    </Flex>
  )
}

export default Header;