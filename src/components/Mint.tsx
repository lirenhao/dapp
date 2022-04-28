import React, { useState } from 'react';
import { Button, Code, VStack } from '@chakra-ui/react';
import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from 'ethers';
import Number from './Number';

type MintProps = {
  contract: Contract;
  functionName: string;
}

const Mint: React.FC<MintProps> = ({ contract, functionName }) => {

  const [amount, setAmount] = useState(1);

  const { state, send } = useContractFunction(contract, functionName, {});

  const goMint = () => {
    send(amount, {
      value: utils.parseEther("0.003"),
    })
  };

  return (
    <VStack spacing={4} >
      <Number value={amount} setValue={setAmount}
        label="Select the amount to mint. Max: 5 per txn" />
      <Button
        size='md'
        height='48px'
        width='400px'
        maxW={400}
        border='2px'
        colorScheme='teal'
        variant='solid'
        onClick={() => goMint()}
      >
        MINT
      </Button>
      <Code>
        {JSON.stringify(state)}
      </Code>
    </VStack>
  )
}

export default Mint;
