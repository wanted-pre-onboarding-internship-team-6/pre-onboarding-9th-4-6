import { Flex, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex>
      <Heading>
        Switch
        <Heading as="span" color="#fd7e14">
          Won
        </Heading>
      </Heading>
    </Flex>
  );
}
