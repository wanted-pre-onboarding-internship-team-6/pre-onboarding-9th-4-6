import { Navbar, Footer } from '@/components';
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';
import { Flex, Text, Box, Icon, Button, Heading } from '@chakra-ui/react';
import { FiTrash2, FiUser } from 'react-icons/fi';

import { Table, createColumn } from 'react-chakra-pagination';
import { useQuery } from '@tanstack/react-query';

export default function Main() {
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    const response = await fetch('./data.json');

    return response.json();
  };

  const { data, isLoading, isError } = useQuery(['getData', page], () =>
    fetchData(),
  );

  const tableData = data?.map(
    (user: {
      id:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
      customer_name:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
      transaction_time: any;
      customer_id: any;
      currency: any;
      status: any;
    }) => ({
      name: (
        <Flex align="center">
          <Text>
            {user.id}.&nbsp;
            {user.customer_name}
          </Text>
        </Flex>
      ),
      'transaction time': user.transaction_time,
      'user ID': user.customer_id,
      currency: user.currency,
      status: user.status,
      action: (
        <Button
          colorScheme="gray"
          onClick={() => console.log('remove user!')}
          size="sm">
          <Icon as={FiTrash2} fontSize="20" />
        </Button>
      ),
    }),
  );
  const columnHelper = createColumn<(typeof tableData)[0]>();

  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      header: 'Name',
    }),
    columnHelper.accessor('transaction time', {
      cell: (info) => info.getValue(),
      header: 'transaction time',
    }),
    columnHelper.accessor('user ID', {
      cell: (info) => info.getValue(),
      header: 'user ID',
    }),
    columnHelper.accessor('currency', {
      cell: (info) => info.getValue(),
      header: 'currency',
    }),
    columnHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: 'status',
    }),
    columnHelper.accessor('action', {
      cell: (info) => info.getValue(),
      header: '',
    }),
  ];
  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      <Navbar />
      <Box p="12">
        <Heading size="sm" as="h3">
          List of Users
        </Heading>

        <Box mt="6">
          <Table
            colorScheme="blue"
            // Fallback component when list is empty
            emptyData={{
              icon: FiUser,
              text: 'Nobody is registered here.',
            }}
            totalRegisters={data.length}
            page={page}
            // Listen change page event and control the current page using state
            onPageChange={(page) => setPage(page)}
            columns={columns}
            data={tableData}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
