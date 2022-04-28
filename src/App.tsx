import { ChakraProvider, Container } from '@chakra-ui/react'
import Header from './components/Header';
import Wallet from './components/Wallet';

import './App.css';

function App() {

  return (
    <ChakraProvider>
      <Header />
      <Container borderWidth='1px' borderRadius='lg' p={4} marginTop={100}>
        <Wallet />
      </Container>
    </ChakraProvider>
  );
}

export default App;
