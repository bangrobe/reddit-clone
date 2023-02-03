import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar'
type Props = {}

const Layout: React.FC<any> = ({ children }) => {
  return (
    <Box minHeight="100vh">
        <Navbar />
        <Box as="main">
           { children }
        </Box>
    </Box>
  )
}

export default Layout;