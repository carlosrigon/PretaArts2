import * as React from 'react';
import { Image, Linking } from 'react-native';
import { Box, Center,  HStack, Text, Pressable } from "native-base";
import Icones from 'react-native-vector-icons/Ionicons';

function LinkFace() {
    Linking.openURL('https://www.facebook.com/ines.rodrigues.5011')
  }
  
  function LinkInsta() {
    Linking.openURL('https://www.instagram.com/ines.rodrigues.5011')
  }

export default function Footer() {

    return (

        <Center>
            <Box>

            <Text fontSize="md" bold>Informações úteis</Text>

            <Text bt={5} fontSize="sm" bold italic>Prazo de entrega:</Text>
            <Text fontSize="sm" >a combinar</Text>

            <Text bt={5} fontSize="sm" bold italic>Forma de Pagamento:</Text>
            <Text fontSize="sm" >Dinheiro ou PIX</Text>

            <Text bt={5} fontSize="sm" bold italic>Encomendas:</Text>
            <HStack>
            <Icones name='logo-whatsapp' size={30} color="green" m={3} />
            <Text fontSize="lg" bold>(55) 9 9926-0918</Text>
            </HStack>

            <Text bt={5} fontSize="sm" bold italic>Minhas redes sociais:</Text>
            <HStack>
                <Pressable onPress={LinkFace}>
                <Icones name='logo-facebook' size={50} color="blue" m={5}/>
                </Pressable>
                <Pressable onPress={LinkInsta}>
                <Icones name='logo-instagram' size={50} color="#3f729b" m={5}/>
                </Pressable>
            </HStack>
            </Box>

            <Image source={require('../img/preta_logo.png')} alt="Logo" heigth="50" width="50" />


        </Center>

    );
}
