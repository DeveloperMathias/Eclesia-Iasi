import { Box, Heading, Text } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"

const Card = (props) => {

    const [isNotMobile] = useMediaQuery("(min-width: 480px)")

    return (
        <>
            <Box p="30" color="red.100" borderRadius="10" backgroundImage={props.bgCardImg} backgroundPosition="center" backgroundRepeat="no-reapeat" backgroundSize="cover">
                <Heading marginTop="3" fontSize={isNotMobile ? { xl: "3xl", md: "xl", sm: "md"} : "1.7em"}>{props.cardTitle}</Heading>
                <Text marginTop="5" fontSize={isNotMobile ? { xl: "15px", md: "md", sm: "sm"} : "1em"} lineHeight="230.5%">{props.cardText}</Text>
            </Box>
        </>
    )
}

export default Card
