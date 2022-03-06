import Navbar from "../components/Navbar"
import Header from "../components/Header"
import resources from "../assets/resources.png"
import Cta from "../components/Cta"
import Footer from "../components/Footer"
import eclesiaSongsCover from "../assets/eclesia-songs-cover.png"
import songbookCover from "../assets/songbook-cover.png"
import { Box, Heading, Text } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/react"

const Resources = () => {

    const [isNotMobile] = useMediaQuery("(min-width: 480px)")

    return (
        <>
            <Navbar />
            <Header heroText="RESURSE" heroImage={resources} />
            <Box minHeight="50vh" width={isNotMobile ? { xl: "50%", md: "50%", sm: "75%"} : "75%"} margin="auto" mt="10" mb="10" d="flex" alignItems="center" justifyContent="center">
                <Box p="50" color="red.100" borderRadius="10" backgroundImage={songbookCover} backgroundPosition="center" backgroundRepeat="no-reapeat" backgroundSize="cover" minHeight="35vh">
                    <Heading marginTop="3" fontSize={isNotMobile ? { xl: "3xl", md: "xl", sm: "md"} : "1.7em"}>Eclesia Songs</Heading>
                    <Text marginTop="5" marginBottom="3" fontSize={isNotMobile ? { xl: "18px", md: "15", sm: "12"} : "1em"} lineHeight="230.5%">Eclesia Songs este “cartea de cântări” digitală a bisericii unde găsiți toate cântecele pe care le cântăm spre slava lui Dumnezeu.</Text>
                    <Cta hrefPath="https://eclesiasongs.today" isExternal={true} width="125px" height="50px" fontSize="1rem" text="Spre resursă"  />
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Resources
