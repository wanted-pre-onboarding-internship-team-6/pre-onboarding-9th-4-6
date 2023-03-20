import { ReactNode, Suspense } from 'react';

import { Flex, Heading, Spinner } from '@chakra-ui/react';

import { Header } from './';
import ErrorBoundary from './ErrorBoundary';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const Loading = () => {
    return (
      <Flex w="100%" h="100%" align="center" justify="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  };

  const Error = () => {
    return (
      <Flex w="100%" h="100%" align="center" justify="center">
        <Heading>Error Page</Heading>
      </Flex>
    );
  };

  return (
    <Flex direction="column" width="100wh" height="100vh">
      <Header />
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </ErrorBoundary>
    </Flex>
  );
}
