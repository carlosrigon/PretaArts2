import * as React from 'react';
//import { Image } from 'react-native';
import { Box, HStack, Text, Image, Center } from "native-base";
import Icones from 'react-native-vector-icons/Ionicons';

export default function Home() {

    return (
        
        <Box alignItens="center">

            <HStack padding={4} w="100%" alignItens="center" justifyContent="space-between" bg="black" >


                <Image source={require('../img/preta_logo.png')} alt="Logo" h="42" w="42" />


                <Box flexDirection={'row'} alignItens="center" justifyContent="center">
                    <Icones name='logo-whatsapp' size={40} color="green" />
                    <Text fontSize="xl" color={'white'} alignItens="center" >(55) 9 9926-0918</Text>
                </Box>

            </HStack>
            
            <Text fontSize="xl" italic textAlign={'center'} m={10, 5, 10, 5}>Trabalhamos com muito carinho para que pessoas e momentos inesquecíveis sejam presenteadas e lembradas de uma forma mais que especial.</Text>
            

        </Box>

    );
}
