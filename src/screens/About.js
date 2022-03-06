import Header from "../components/Header"
import Navbar from "../components/Navbar"
import tabaraVoronet from "../assets/tabara-voronet.png"
import { Box, Heading, Text, Grid } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import Card from "../components/Card"
import cardImg1 from "../assets/god-father.png"
import cardImg2 from "../assets/jesus.png"
import cardImg3 from "../assets/dove.png"
import cardImg4 from "../assets/man.png"
import cardImg5 from "../assets/angel-wings.png"
import cardImg6 from "../assets/sin-card.png"
import cardImg7 from "../assets/salvation.png"
//For cardImg8 use tabaraVoronet
import cardImg9 from "../assets/bible-card.png"
import cardImg10 from "../assets/holy.png"
import Footer from "../components/Footer"

const About = () => {

    const [isNotMobile] = useMediaQuery("(min-width: 500px)")

    return (
        <>
            <Navbar />
            <Header heroText="Despre noi" heroImage={tabaraVoronet} />
            <Box minHeight="50vh" w="80%" m="auto" pt="10" pb="15" d="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
                <Heading fontSize={isNotMobile ? { xl: "4xl", md: "2xl", sm: "2xl"} : "2em"} color="red.600">Cine suntem și ce credem</Heading>
                <Text mt="8" fontSize={isNotMobile ? { xl: "xl", md: "md", sm: "sm"} : "1em"} color="red.600" lineHeight="230.5%">
                    Suntem o biserică evanghelică nondenominațională, plantată de Domnul
                    la începutul anilor 1990 în campusul Tudor Vladimirescu din Iași.  
                    Viziunea evanghelizării, uceniciei și a misiunii ne-a însuflețit în 
                    anii care s-au scurs așa de repede.  Astăzi dorim să continuăm să fim
                    o biserică vie, strălucind pentru Cristos și să ducem lumina adevărului Său 
                    următoarelor generații până la marginile pământului. Cele zece doctrine 
                    fundamentale ale creștinismului care formează și crezul nostru sunt pe 
                    scurt formulate mai jos.
                </Text>
            </Box>
            <Grid width="80%" margin="auto" marginBottom="10" templateColumns={ isNotMobile ? { xl: "repeat(3, 3fr)", md: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" } : "repeat(1, 1fr)" } templateRows="repeat(5, 2fr)" gap={20}>
                <Card 
                    bgCardImg={cardImg1} 
                    cardTitle="Dumnezeu Tatăl" 
                    cardText="Tatăl planifică, poartă de grijă și disciplinează pe om 
                              și pe îngeri." 
                />
                <Card 
                    bgCardImg={cardImg2}
                    cardTitle="Dumnezeu Fiul" 
                    cardText="Fiul este Domnul, Împăratul Universului și Capul Bisericii. 
                              El există din veșnicie, dar s-a întrupat prin Fecioara Maria 
                              de la Duhul Sfânt pentru a fi modelul nostru de viață și a murit 
                              pe Cruce pentru a salva pe oameni din păcat și moarte, dacă se 
                              încred în jertfa Sa. ." 
                />
                <Card 
                    bgCardImg={cardImg3} 
                    cardTitle="Dumnezeu Duhul Sfânt" 
                    cardText="Duhul Sfânt vine în credincios, născându-l din nou atunci când 
                              a crezut.  El produce sfințenie în omul salvat și-l îndrumă în 
                              viață. Duhul Sfânt îl face pe omul salvat un mădular al Bisericii 
                              și-i dă daruri spirituale pentru slujirea Bisericii. El a insuflat 
                              pe oameni să scrie Biblia care este Cuvântul lui Dumnezeu." 
                />
                <Card 
                    bgCardImg={cardImg4} 
                    cardTitle="Omul" 
                    cardText="Omul este păcătos, mort din punct de vedere spiritual și nu se poate 
                              salva singur. El are nevoie de experiența nașterii din nou pentru a 
                              intra în Împărăția lui Dumnezeu. Nașterea din nou se produce prin 
                              experiența primirii Duhului Sfânt și a credinței în jertfa Fiului." 
                />
                <Card 
                    bgCardImg={cardImg5} 
                    cardTitle="Îngerii" 
                    cardText="Îngerii sunt ființe spirituale create de Dumnezeu pentru diferite 
                              slujiri. Sunt îngerii buni (heruvimi, serafimi, arhangheli) și îngeri 
                              răi (demoni, draci, diavolul). Îngerii răi au fost îngeri buni, dar au 
                              păcătuit, așteptând pedeapsa veșnică."
                />
                <Card 
                    bgCardImg={cardImg6} 
                    cardTitle="Păcatul" 
                    cardText="Păcatul este o încălcare a legilor lui Dumnezeu. Păcatul a adus moartea 
                              în univers, atrage judecata lui Dumnezeu și pedepsirea lui." 
                />
                <Card 
                    bgCardImg={cardImg7} 
                    cardTitle="Salvare" 
                    cardText="Salvarea omului din păcat și de sub urmările judecății lui Dumnezeu este 
                              posibilă numai prin credința în jertfa Domnului Isus Christos." 
                />
                <Card 
                    bgCardImg={tabaraVoronet} 
                    cardTitle="Biserica" 
                    cardText="Biserica Universală este totalitatea credincioșilor în Domnul Isus Cristos. 
                              Biserica locală este formată din credincioșii  Domnul Isus Cristos care se 
                              adună pentru a împlini funcțiile bisericii și respectă rânduiala Domnului." 
                />
                <Card 
                    bgCardImg={cardImg9} 
                    cardTitle="Biblia" 
                    cardText="Biblia sau Sfânta Scritură este cuvântul infailibil al lui Dumnezeu. Ea 
                              este îndrumătorul pentru credincios și Biserică."
                />
                <Card 
                    bgCardImg={cardImg10} 
                    cardTitle="Sfințenie" 
                    cardText="Sfânt, înseamnă, a fi pus deoparte pentru Dumnezeu, dar și curat din punct 
                              de vedere spiritual. Aceasta conferă un statut omului credincios dar indică 
                              și un proces care ține toată viața. Omul nu poate fi sfânt doar prin efortul propriu. 
                              Este un dar de la Dumnezeu pe care trebuie să-l dezvolte continuu prin fapte și credință."
                />
            </Grid>
            <Footer />
        </>
    )
}

export default About
