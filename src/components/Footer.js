import { Image } from "@chakra-ui/image"
import { Flex, Spacer, Text } from "@chakra-ui/layout"
import icon from "../assets/icon.png"
import facebookIcon from "../assets/facebook-icon.svg"
import {
    useMediaQuery,
    Link
  } from "@chakra-ui/react"

const Footer = () => {

    const [isNotMobile] = useMediaQuery("(min-width: 480px)")

    return (
        <>
            <Flex w="100%" height="20" p="10px" alignItems="center" backgroundColor="red.200">
                <Image boxSize="65px" marginLeft="10px" src={icon} alt="logo" />
                <Text color="red.600" fontSize={ isNotMobile ? { xl: "xl", md: "xl", sm: "md" } : "1em"} fontWeight="medium" ml="1rem">© Biserica Eclesia Iași 2021</Text>
                <Spacer></Spacer>
                <Link href="https://www.facebook.com/eclesiaiasi/" isExternal width="fit-content" p="1" borderRadius="50"  _focus={{ boxShadow: "0 0 2px 1px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}}><Image boxSize="30px" src={facebookIcon} alt="facebook page link" /></Link>
            </Flex>
        </>
    )
}

export default Footer
