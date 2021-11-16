import { useMediaQuery } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Box, Flex, Heading, LinkBox, Text } from "@chakra-ui/layout"
import Cta from "./Cta"

const Section = (props) => {

    const [isNotMobile] = useMediaQuery("(min-width: 500px)")

    return (
        <>
            <Flex w="80%" m="auto" pt="20" pb="20" minH="55vh" 
                  display={{ xl: "flex", lg: "flex", md: "column", sm: "column" }}
            >
                <Box d="flex" flex="1" flexDirection="column" justifyContent="center" pr="10"
                     pl={isNotMobile ? { xl: "auto", md: "auto", sm: "auto"} : "1"}
                     pr={isNotMobile ? { xl: "10", md: "10", sm: "5"} : "1"}
                >
                    <Heading fontSize={isNotMobile ? { xl: "4xl", md: "2xl", sm: "2xl"} : "2em"} color="red.600">{props.heading}</Heading>
                    <Text fontSize={isNotMobile ? { xl: "2xl", md: "md", sm: "sm"} : "1em"} color="red.600" lineHeight="230.5%" marginTop="25px">
                        {props.description}
                    </Text>
                    <Cta hrefPath="/about" width={props.buttonWidth} height="50px" mt="5" fontSize="1rem" text={props.buttonText}  />
                </Box>
                <Box d="flex" flex="1" alignItems="center" justifyContent="center">
                    <Image src={props.image} 
                           height={ isNotMobile ? { xl: "50vh", md: "40vh", sm:"40vh" } : "40vh" }
                           marginTop={ isNotMobile ? { xl: "auto", md: "auto", sm: "50px" } : "50px" }
                           objectFit="cover"
                    />
                </Box>
            </Flex>
        </>
    )
}

export default Section
