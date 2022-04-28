import { useState, useEffect, useCallback, useMemo } from 'react';
import { VStack, Button, Tag } from '@chakra-ui/react';
import { shortenAddress, useEthers, useConfig, useLookupAddress } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { addresses, abis } from "../contracts";
import Mint from './Mint';

function Wallet() {

  const [rendered, setRendered] = useState("");

  const ens = useLookupAddress();
  const {
    account, chainId, isLoading, library,
    activateBrowserWallet, deactivate, switchNetwork, error
  } = useEthers();

  const { readOnlyChainId } = useConfig();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  const changeChain = useCallback(() => {
    if (account && chainId !== readOnlyChainId && readOnlyChainId) {
      switchNetwork(readOnlyChainId);
    }
  }, [account, chainId, readOnlyChainId, switchNetwork]);

  const lrhMetaContract = useMemo(() => {
    if (account && library) {
      return new Contract(addresses.lrhMeta, abis.lrhMeta, library.getSigner(account))
    } else {
      return undefined;
    }
  }, [account, library]);

  if (rendered === "") {
    return (
      <VStack spacing={2} >
        <Button
          size='md'
          height='48px'
          width='400px'
          maxW={400}
          border='2px'
          colorScheme='teal'
          variant='solid'
          isLoading={isLoading}
          onClick={() => {
            if (!account) {
              activateBrowserWallet();
            } else {
              deactivate();
            }
          }}>
          Connect Wallet
        </Button>
      </VStack>
    )
  } else if (chainId !== readOnlyChainId) {
    return (
      <VStack spacing={2} >
        <Button
          size='md'
          height='48px'
          width='400px'
          maxW={400}
          border='2px'
          colorScheme='teal'
          variant='solid'
          isLoading={isLoading}
          onClick={() => changeChain()}>
          Change Chain
        </Button>
      </VStack>
    )
  } else if (lrhMetaContract) {
    return (
      <Mint contract={lrhMetaContract} functionName="mintMeta" />
    )
  } else {
    return (
      <VStack spacing={2} >
        {chainId}
        <Tag color="blue">{rendered}</Tag>
        <Button
          size='md'
          height='48px'
          width='400px'
          maxW={400}
          border='2px'
          colorScheme='teal'
          variant='solid'
          isLoading={isLoading}
          onClick={deactivate}>
          Logout
        </Button>
      </VStack>
    )
  }
}

export default Wallet;