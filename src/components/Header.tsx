import { Flex, HStack, Text, Link, Button } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex w="full" bg="blue.900" justify="center" align="center" color="white">
      <Flex
        w="full"
        justify="space-between"
        align="center"
        h="15vh"
        maxW="container.md"
      >
        <HStack spacing="16">
          <Flex>
            <Text fontWeight="bold">ig.news</Text>
          </Flex>
          <HStack spacing="8">
            <Link href="/">Home</Link>
            <Link href="/">Posts</Link>
          </HStack>
        </HStack>

        <Button colorScheme="blue">Sign In With Gihub</Button>
      </Flex>
    </Flex>
  );
};
