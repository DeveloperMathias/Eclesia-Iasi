import { Button } from "@chakra-ui/button"
import { Link } from "@chakra-ui/layout"

const Cta = (props) => {
    return (
        <>
            <Link href={props.hrefPath} isExternal={props.isExternal} mt={props.mt} width="fit-content" _hover={ {textDecoration: "none"} }>
                <Button
                        type={props.type}
                        bg="red.800"
                        color="red.100"
                        borderColor="red.500"
                        width={props.width}
                        height={props.height}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        fontSize={props.fontSize}
                        fontWeight="semibold"
                        _hover={{ bg: "red.700" }}
                        _active={{
                            bg: "red.700",
                            transform: "scale(0.95)",
                            borderColor: "red.400"
                        }}
                        _focus={{
                            boxShadow:
                                "0 0 2px 4px rgba(242, 194, 128, .75), 0 1px 1px rgba(242, 194, 128, .15)",
                            }}
                        >
                            {props.text}
                    </Button>
            </Link>
        </>
    )
}

export default Cta
