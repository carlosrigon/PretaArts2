import * as React from 'react';
import { Box, HStack, Text } from "native-base";
import Icones from 'react-native-vector-icons/Ionicons';

export default function Home() {

    return (

        <Box>

            <HStack padding={4} h="40" w="100%" alignItens="center" justifyContent="space-between" bg="black" safeArea>

                <Box>
                    <Image source={require('../src/img/preta_logo.png')} alt="Logo" heigth="35" width="35" />
                </Box>

                <Box>
                    <Icones name='logo-whatsapp' size={30} color="green" m={3} />
                    <Text fontSize="sm" color={'white'}>(55) 9 9926-0918</Text>
                </Box>

            </HStack>

            <Text fontSize="md" italic>Trabalhamos com muito carinho para que pessoas e momentos inesquecíveis sejam presenteadas e lembradas de uma forma mais que especial.</Text>

        </Box>

    );
}
