import React from 'react';
import { Flex, Box, HStack, Avatar, Heading, Spacer } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaDiscord } from 'react-icons/fa'
import logo from '../logo.svg';

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {

  return (
    <Flex bg="teal" align="center" position="sticky" top="0" zIndex="1">
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
        <HStack spacing={4}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size="30" color="white" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter size="30" color="white" />
          </a>
          <a href="https://www.discord.com" target="_blank" rel="noreferrer">
            <FaDiscord size="30" color="white" />
          </a>
        </HStack>
      </Box>
      <Spacer />
    </Flex>
  )
}

export default Header;