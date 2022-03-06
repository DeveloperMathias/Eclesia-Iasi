import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Section from "../components/Section"
import GospelSection from "../components/GospelSection"
import ContactSection from "../components/ContactSection"
import headerImage from "../assets/eclesia-header-image.png"
import values from "../assets/bible-group.png"
import voronet from "../assets/voronet.png"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <Navbar />
            <Header heroText="O BISERICĂ VIE STRĂLUCIND PENTRU CRISTOS!" heroImage={headerImage} />
            <Section heading="Cine suntem?" description="Suntem o biserică evanghelică plantată de Domnul la începutul anilor 1990 în campusul Tudor Vladimirescu din Iași." buttonDescription="Despre noi" buttonText="Despre noi" buttonWidth="125px" image={voronet} />
            <GospelSection />
            <Section heading="Valorile noastre" description="Valorile bisericii noastre sunt rugăciunea, studierea Bibliei, părtășia, ucenicia, învățătura, evanghelizarea, slujirea, misiunea și închinarea." hrefPath="/about" buttonText="Află mai multe" buttonWidth="150px" image={values} />
            <ContactSection />
            <Footer></Footer>
        </>
    )
}

export default Home
