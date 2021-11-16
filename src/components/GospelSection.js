import { Box, useMediaQuery } from "@chakra-ui/react"
import { Heading, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import god from "../assets/love-hate.png"
import cross from "../assets/cross.png"
import sin from "../assets/sin.png"
import questionMark from "../assets/question-mark.png"

const GospelSection = () => {

    const [isNotMobile] = useMediaQuery("(min-width: 480px)")

    return (
        <>
            <Box bg="red.200" minHeight="80vh">
                <Heading width="80%" margin="auto" pt="10" color="red.600" fontWeight="black" fontSize={isNotMobile ? { xl: "5xl", md: "4xl", sm: "2xl"} : "2em"}>Evanghelia - asta vestim</Heading>
                <Box minHeight="60vh" w="80%" margin="auto" pt="20" pb="20" d="flex" flexDirection={isNotMobile ? { xl: "row", md: "column", sm: "column"} : "column"}>
                    <Box d="flex" flex="1" flexDirection="column">
                        <Box d="flex" flexDirection={isNotMobile ? { xl: "row", md: "row", sm: "column"} : "column"}>
                            <Box flex="1" pr="10">
                                <Text color="red.600" style={{fontFamily: "'Courgette', cursive"}} fontWeight="bold" fontSize={isNotMobile ? { xl: "2xl", md: "xl", sm: "md"} : "1.5em"} lineHeight="230.5%">Dumnezeu</Text>
                                <Text color="red.600" lineHeight="230.5%" fontSize={isNotMobile ? { xl: "md", md: "sm", sm: "xs"} : "1em"}>
                                    Dumnezeu este binevoitor și binefăcător. El dă ploaie peste cel bun
                                    și peste cel rău. El nu dorește moartea păcătosului. Dumnezeu este 
                                    drept - El nu v-a lăsa pe păcătos nepedepsit. 
                                </Text>
                            </Box>
                            <Box flex="1" d="flex" justifyContent={isNotMobile ? { xl: "right", md: "right", sm: "left"} : "left"} mt={isNotMobile ? { xl: "0", md: "0", sm: "10"} : "10"}>
                                <Image src={god} height="25vh" borderRadius="10" objectFit="cover" />
                            </Box>
                        </Box>
                        <Box d="flex" mt="20" flexDirection={isNotMobile ? { xl: "row", md: "row", sm: "column"} : "column"}>
                            <Box flex="1" pr="10">
                                <Text color="red.600" style={{fontFamily: "'Courgette', cursive"}} fontWeight="bold" fontSize={isNotMobile ? { xl: "2xl", md: "xl", sm: "md"} : "1.5em"} lineHeight="230.5%">Cristos</Text>
                                <Text color="red.600" lineHeight="230.5%" fontSize={isNotMobile ? { xl: "md", md: "sm", sm: "xs"} : "1em"}>
                                Domnul Isus Cristos este 100% Dumnezeu și 100% om . Dragostea și dreptatea
                                lui Dumnezeu se văd la Cruce, unde Domnul a purtat pedeapsa pentru păcatul 
                                nostru. El a murit pentru păcatele noastre și a înviat, stând la dreapta 
                                Tatălui mijlocind pentru cei credincioși. 
                                </Text>
                            </Box>
                            <Box flex="1" d="flex" justifyContent={isNotMobile ? { xl: "right", md: "right", sm: "left"} : "left"} mt={isNotMobile ? { xl: "0", md: "0", sm: "10"} : "10"}>
                                <Image src={cross} height="25vh" borderRadius="10" objectFit="cover" />
                            </Box>
                        </Box>
                    </Box>
                    <Box d="flex" flex="1" flexDirection="column" ml={isNotMobile ? { xl: "10", md: "0", sm: "0"} : "0"} mt={isNotMobile ? { xl: "0", md: "20", sm: "20"} : "20"}>
                        <Box d="flex" flexDirection={isNotMobile ? { xl: "row", md: "row", sm: "column"} : "column"}>
                            <Box flex="2" pr="10" pl={isNotMobile ? { xl: "10", md: "0", sm: "0"} : "0"}>
                                <Text color="red.600" style={{fontFamily: "'Courgette', cursive"}} fontWeight="bold" fontSize={isNotMobile ? { xl: "2xl", md: "xl", sm: "md"} : "1.5em"} lineHeight="230.5%">Omul</Text>
                                <Text color="red.600" lineHeight="230.5%" fontSize={isNotMobile ? { xl: "md", md: "sm", sm: "xs"} : "1em"}>
                                Omul ste păcătos și nu se poate salva singur. Păcatele nu pot fi șterse de 
                                fapte bune ci doar de jertfa Domnului Cristos prin căință, mărturisire și 
                                îndreptare.
                                </Text>
                            </Box>
                            <Box flex="1" d="flex" justifyContent={isNotMobile ? { xl: "right", md: "right", sm: "left"} : "left"} mt={isNotMobile ? { xl: "0", md: "0", sm: "10"} : "10"}>
                                <Image src={sin} height="30vh" borderRadius="10" objectFit="cover" />
                            </Box>
                        </Box>
                        <Box d="flex" mt="20" flexDirection={isNotMobile ? { xl: "row", md: "row", sm: "column"} : "column"}>
                            <Box flex="2" pr="10" pl={isNotMobile ? { xl: "10", md: "0", sm: "0"} : "0"}>
                                <Text color="red.600" style={{fontFamily: "'Courgette', cursive"}} fontWeight="bold" fontSize={isNotMobile ? { xl: "2xl", md: "xl", sm: "md"} : "1.5em"} lineHeight="230.5%">Te-ai decis?</Text>
                                <Text color="red.600" lineHeight="230.5%" fontSize={isNotMobile ? { xl: "md", md: "sm", sm: "xs"} : "1em"}>
                                Chiar dacă ești deacord cu afirmațiile de mai sus, ele nu-ți  vor folosi la 
                                nimic până nu ai credința mântuitoare. Nu  doar o credință intelectuală sau 
                                temporară, ci încrederea în darul lui Dumnezeu pentru noi - Isus Cristos.
                                Această credință te face un om nou având păcatele iertate și devenind un 
                                copil al lui Dumnezeu.
                                </Text>
                            </Box>
                            <Box flex="1" d="flex" justifyContent={isNotMobile ? { xl: "right", md: "right", sm: "left"} : "left"} mt={isNotMobile ? { xl: "0", md: "0", sm: "10"} : "10"}>
                                <Image src={questionMark} height="30vh" borderRadius="10" objectFit="cover" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default GospelSection
