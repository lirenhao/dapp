import { useMemo } from 'react';
import { ChakraProvider, Container, Center } from '@chakra-ui/react'
import { useEthers } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { addresses, abis } from "./contracts";
import Header from './components/Header';
import Mint from './components/Mint';
import Wallet from './components/Wallet';

import './App.css';

function App() {

  const { account, library } = useEthers();

  const lrhMetaContract = useMemo(() => {
    if (account && library) {
      return new Contract(addresses.lrhMeta, abis.lrhMeta, library.getSigner(account))
    } else {
      return undefined;
    }
  }, [account, library]);

  return (
    <ChakraProvider>
      <Header />
      <Container borderWidth='1px' borderRadius='lg' p={4} marginTop={100}>
        {lrhMetaContract ?
          <Mint contract={lrhMetaContract} /> :
          <Wallet />
        }
      </Container>
    </ChakraProvider>
  );
}

export default App;
