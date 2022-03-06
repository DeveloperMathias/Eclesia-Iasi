import { Box, Heading, useMediaQuery, Button } from "@chakra-ui/react"
import Cta from "./Cta"
import Footer from "./Footer"

const ContactSection = () => {

    const [isNotMobile] = useMediaQuery("(min-width: 480px)")

    return (
        <>
            <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="40vh" textAlign="center" mb="50">
                <Heading color="red.600" fontWeight="black" fontSize={isNotMobile ? { xl: "6xl", md: "4xl", sm: "1.5em"} : '1.5em'}>Ai întrebări? Contacteză-ne!</Heading>
                <Cta hrefPath="/contact" width={ isNotMobile ? { xl: "200px", md: "175px", sm: "175px" } : "175px" } height={ isNotMobile ? { xl: "75px", md: "60px", sm: "60px" } : "60px" } mt="10" fontSize={ isNotMobile ? { xl: "2rem", md: "1.75rem", sm: "1.3rem" } : "1.3rem" } text="Contact"  />
            </Box>
        </>
    )
}

export default ContactSection
