import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Box py={2}>
        Hi
      </Box>
    
    </ChakraProvider>
    );
}

export default App;
