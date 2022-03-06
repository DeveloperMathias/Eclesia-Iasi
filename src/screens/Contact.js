import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Box, Heading, Link, Text } from "@chakra-ui/layout"
import Navbar from "../components/Navbar"
import { useMediaQuery, Textarea } from "@chakra-ui/react"
import Cta from "../components/Cta"
import emailjs from "emailjs-com"

const Contact = () => {

    const [isNotMobile] = useMediaQuery("(min-width: 480px)")

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                alert("Mesajul dumneavoastră a fost trimis cu succes! Vom răspunde cât de rapid posibil.")
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <Navbar />
            <Box d="flex" flexDirection={isNotMobile ? { xl: "row", md: "column", sm: "column"} : "column"} bg="#F1F1F1" width="75%" margin="auto" minHeight="80vh" mt="15" borderRadius="10" mb="10" >
                <form style={ { flex: "2" } } onSubmit={sendEmail}>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        id="email"
                        p={ isNotMobile ? { xl: "75", md: "75", sm: "50"} : "30" }
                    >
                        <Heading fontSize={isNotMobile ? { xl: "4xl", md: "2xl", sm: "2xl"} : "1.3em"} >Contactează-ne</Heading>
                        <FormLabel marginTop="50px">Nume și Prenume:</FormLabel>
                        <Input _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} width={ isNotMobile ? { xl: "75%", md: "75%", sm: "100%"} : "100%" } type="text" bg="#DEDEDE" isRequired />
                        <FormLabel mt="10">Adresă de email:</FormLabel>
                        <Input _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} width={ isNotMobile ? { xl: "75%", md: "75%", sm: "100%"} : "100%" } type="email" bg="#DEDEDE" isRequired />
                        <FormLabel mt="10">Mesaj:</FormLabel>
                        <Textarea height="15vh" width={ isNotMobile ? { xl: "75%", md: "75%", sm: "100%"} : "100%" } mb="10" _focus={{ boxShadow: "0 0 1px 3px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",}} bg="#DEDEDE" isRequired />
                        <Cta type="submit" hrefPath="" width="150px" height="50px" fontSize="1rem" text="Trimite mesajul"  />
                    </FormControl>
                </form>
                <Box flex="1" d="flex" flexDirection="column" pl={isNotMobile ? { xl: "none", md: "75", sm: "75"} : "75"} p={ isNotMobile ? { xl: "75", md: "75", sm: "50"} : "30" } pb="10">
                    <Heading fontWeight="medium" fontSize={isNotMobile ? { xl: "3xl", md: "1xl", sm: "xl"} : "1.7em"} color="red.600">Date de contact:</Heading>
                    <Text marginTop="50px" fontWeight="medium" fontSize={isNotMobile ? { xl: "xl", md: "md", sm: "sm"} : "1em"}>Email:</Text>
                    <Text fontSize={isNotMobile ? { xl: "xl", md: "md", sm: "sm"} : "1em"}>raduonu@yahoo.com</Text>
                    <Text marginTop="50px" fontWeight="medium" fontSize={isNotMobile ? { xl: "xl", md: "md", sm: "sm"} : "1em"}>Telefon:</Text>
                    <Text fontSize={isNotMobile ? { xl: "xl", md: "md", sm: "sm"} : "1em"}>+40 756 154 989</Text>
                    <Text marginTop="50px" fontWeight="medium" fontSize={isNotMobile ? { xl: "xl", md: "md", sm: "sm"} : "1em"}>Locație:</Text>
                    <Text fontSize={isNotMobile ? { xl: "xl", md: "md", sm: "sm"} : "1em"}>Direcții către adresă: - <Link href="https://goo.gl/maps/6hdB99XgdEAMZXUk8" color="#066887" isExternal>Direcții</Link></Text>
                </Box>
            </Box>
        </>
    )
}

export default Contact
