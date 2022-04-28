import React from 'react';
import { VStack, HStack, Button, NumberInput, NumberInputField } from '@chakra-ui/react';

type NumberProps = {
  value: number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  label: string;
}

const Number: React.FC<NumberProps> = ({ label, value, setValue, min = 1, max = 5 }) => {
  return (
    <VStack spacing={2} >
      <div>{label}</div>
      <HStack>
        <Button isDisabled={value === min} onClick={() => setValue(value - 1)}>-</Button>
        <NumberInput maxW={16} value={value} min={min} max={max} precision={0}>
          <NumberInputField />
        </NumberInput>
        <Button isDisabled={value === max} onClick={() => setValue(value + 1)}>+</Button>
        <Button onClick={() => setValue(max)}>Max</Button>
      </HStack>
    </VStack>
  )
}

export default Number;
