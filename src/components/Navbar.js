import React from 'react'
import { Image } from "@chakra-ui/image"
import { Flex, Box, Spacer, Text } from "@chakra-ui/layout"
import { IconButton } from '@chakra-ui/button'
import icon from "../assets/icon.png"
import burger from "../assets/burger.svg"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useBreakpointValue,
    useMediaQuery,
    Link
  } from "@chakra-ui/react"

const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState("right")
    const [isNotMobile] = useMediaQuery("(min-width: 500px)")

    return (
        <Flex w="100%" height="20" bg={props.bg} p="10px" alignItems="center">
            <Link href="/" width="fit-content" p="1" _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}}><Image boxSize="65px" src={icon} alt="logo" /></Link>
            <Link href="/" width="fit-content" p="1" _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)"}} _hover={ {textDecoration: "none"}} ><Text color="red.600" fontSize={ isNotMobile ? { xl: "2xl", md: "xl", sm: "md" } : "1em"} fontWeight="medium" ml="1rem">Biserica Eclesia Iași</Text></Link>
            <Spacer></Spacer>
            {isNotMobile && <Box display={{ xl: "flex", lg: "flex", md: "flex", sm: "none" }} >
                <Link href="/" color="red.600" width="fit-content" p="1" _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} _hover={ {textDecoration: "none"} }>ACASĂ</Link>
                <Link href="/about" ml={10} color="red.600" width="fit-content" p="1"  _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} _hover={ {textDecoration: "none"} }>DESPRE NOI</Link>
                <Link href="/resources" ml={10} color="red.600"  width="fit-content" p="1"  _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} _hover={ {textDecoration: "none"} }>RESURSE</Link>
                <Link href="/contact" ml={10} mr={5} color="red.600"  width="fit-content" p="1" _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} _hover={ {textDecoration: "none"} }>CONTACT</Link>
            </Box>}
            <IconButton display={{ xl: "none", lg: "none", md: "none", sm: "flex" }} flexDirection="column" alignItems="center" onClick={onOpen} _active={{
                        transform: "scale(0.95)",
                        borderColor: "red.400"
                    }} _focus={{
                        boxShadow:
                            "0 0 2px 2px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",
                        }}>
                <Image boxSize="50px" src={burger} />
            </IconButton>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton 
                    color="red.600" 
                    _active={{
                        transform: "scale(0.95)",
                        borderColor: "red.400"
                    }} 
                    _focus={{ boxShadow: "0 0 2px 2px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} 
                    backgroundColor="red.100"
                    />
                <DrawerBody backgroundColor="red.100" color="red.600">
                    <Flex height="30vh" flexDirection="column" justifyContent="space-around">
                        <Link href="/" color="red.600" width="fit-content" p="1" _focus={{ boxShadow: "0 0 2px 1px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} _hover={ {textDecoration: "none"} }>ACASĂ</Link>
                        <Link href="/about" color="red.600" width="fit-content" p="1" _focus={{ boxShadow: "0 0 2px 1px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} _hover={ {textDecoration: "none"} }>DESPRE NOI</Link>
                        <Link href="/resources" color="red.600" width="fit-content" width="fit-content" p="1" _focus={{ boxShadow: "0 0 2px 1px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} _hover={ {textDecoration: "none"} }>RESURSE</Link>
                        <Link href="/contact" color="red.600" width="fit-content" width="fit-content" p="1" _focus={{ boxShadow: "0 0 2px 1px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} _hover={ {textDecoration: "none"} }>CONTACT</Link>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Navbar
