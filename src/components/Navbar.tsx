import { useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export default function Nav() {
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.200', 'gray.900');

  return (
    <div>
      <Box bg={bg} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box onClick={() => navigate('/main')} cursor="pointer">
            Switchwon
          </Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Button bg={bg} onClick={toggleColorMode}>
                {colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
