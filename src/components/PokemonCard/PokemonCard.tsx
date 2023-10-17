import {Button, Card, CardBody, CardFooter, Heading, Image, Stack, useDisclosure} from "@chakra-ui/react";
import style from "./PokemonCard.module.css"
import {PokemonDetails} from "../PokemonDetails/PokemonDetails";

interface Props {
    name: string,
    imageUrl: string
}

export const PokemonCard = ({name, imageUrl}: Props) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return <Card maxW='sm' mb={2} minW='sm'>
        <CardBody>
            <Image className={style.image}
                   src={imageUrl}
                   alt='Pokemon image should be here'
                   borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
            </Stack>
        </CardBody>
        <CardFooter>

            <Button variant='solid' colorScheme='blue' onClick={onOpen}>

                More Details
            </Button>
            <PokemonDetails name={name.toLowerCase()} isOpen={isOpen} onClose={onClose} image={imageUrl}/>
        </CardFooter>
    </Card>
}