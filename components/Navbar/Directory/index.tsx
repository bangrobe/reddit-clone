import React from 'react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Image,
} from "@chakra-ui/react";
import { TiHome } from 'react-icons/ti'
import Communities from './Communities';
type Props = {}

const Directory = (props: Props) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            cursor="pointer"
            padding="0px 6px"
            borderRadius="4px"
            _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
            mr={2}
            ml={{ base: 0, md: 2 }}
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width={{ base: "auto", lg: "200px" }}
            >
              <Flex alignItems="center" justify="space-between" width={{ base: 'auto', lg: '200px'}}>
                <>
                    <Icon as={TiHome} fontSize={24} mr={{ base: 1, md: 1}} />
                    <Flex display={{base: 'none', lg: 'flex'}}>
                        <Text fontWeight={600} fontSize="10pt">Home</Text>
                    </Flex>
                </>
              </Flex>
              <ChevronDownIcon color="gray.500" />
            </Flex>
          </MenuButton>
          <MenuList maxHeight="300px" overflow="scroll" overflowX="hidden">
                <Communities />
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default Directory