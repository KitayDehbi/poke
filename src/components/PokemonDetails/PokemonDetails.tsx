import {
    Button,
    Divider,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {getPokemonDetails} from "../../services/PokemonService";
import {PokemonDetailResponse} from "../../types/PokemonDetailResponse";
import style from "./PokemonDetais.module.css"
import {AbilityTable} from "../AbilityTable/AbilityTable";
import {Stats} from "../Stats/Stats";

interface Props {
    name: string,
    image: string,
    isOpen: boolean,
    onClose: () => void
}

export const PokemonDetails = ({name, image, isOpen, onClose}: Props) => {
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailResponse>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
            getPokemonDetails(name).then(result => {
                    setIsLoading(false)
                    setPokemonDetail(result)

                }
            )
        }, []
    )
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>{name.toUpperCase()}</ModalHeader>
                    <ModalCloseButton/>
                    <Divider/>
                    <ModalBody>
                        {isLoading ? <h1>loading...</h1> :
                            <>
                                <div className={style.container}>
                                    <Image src={image} className={style.image}/>
                                    <AbilityTable abilities={pokemonDetail?.abilities}/>
                                </div>
                                <Divider/>
                                <Stats stats={pokemonDetail?.stats}/>
                            </>
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}