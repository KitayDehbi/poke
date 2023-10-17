import {Ability} from "../../types/Ability";
import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

interface Props{
    abilities? : Ability[]
}
export const AbilityTable = ({abilities}: Props) => {

    return <TableContainer>
        <Table size='sm'>
            <Thead>
                <Tr>
                    <Th>Ability</Th>
                    <Th>Is Hidden</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    abilities?.map(a =>{
                        return <Tr>
                            <Td>{a.ability.name}</Td>
                            <Td>{""+a.is_hidden}</Td>
                        </Tr>
                    })
                }

            </Tbody>
        </Table>
    </TableContainer>
}