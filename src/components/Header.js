import React from "react"
import Navbar from "./Navbar"
import { Flex, Text } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/react"

const Header = (props) => {

    const [isNotMobile] = useMediaQuery("(min-width: 480px)")

    return (
        <>
            {/* <Navbar bg="red.100" /> */}
            <Flex 
                width="100%" h="75vh" bg="red.100" alignItems="center"
                justifyContent="space-around"
                backgroundImage={props.heroImage} backgroundPosition="center"
                backgroundRepeat="no-repeat" backgroundSize="cover"
            >
                <Text fontSize={isNotMobile ? { xl: "6xl", md: "5xl", sm: "3em"} : '2em'}
                 fontWeight="black" paddingRight={isNotMobile ? "20" : "5"} paddingLeft={isNotMobile ? "20" : "5"}color="red.100">
                    {props.heroText}
                </Text>
            </Flex>
        </>
    )
}

export default Header