import * as React from 'react';
import { Box, HStack, Text, Image, Center, ScrollView } from "native-base";
import Icones from 'react-native-vector-icons/Ionicons';

import Produtos from './Produtos';
import Footer from './Footer';

export default function Home() {

    return (
        
        <Box flex={3} flexDir={'column'} bg="#fafad2">

            <HStack padding={2} w="100%" alignItens="center" justifyContent="space-between" bg="black" >


                <Image source={require('../img/Preta_logo_retang.png')} alt="Logo" h={45} w={130} borderRadius="20" />


                <Box flexDirection="row" alignItems={'center'}>
                    <Icones name='logo-whatsapp' size={38} color="green" />
                    <Text fontSize="lg" color={'white'} textAlign={'center'} marginX={1}>(55) 9 9926-0918</Text>
                </Box>

            </HStack>

            <ScrollView>
            
            <Text fontSize="xl" italic textAlign={'center'} m={10}>Trabalhamos com muito carinho para que pessoas e momentos inesquecíveis sejam presenteadas e lembradas de uma forma mais que especial.</Text>
            
            
                <Produtos/>
                <Footer/>
            </ScrollView>

        </Box>

    );
}
