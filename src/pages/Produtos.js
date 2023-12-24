import * as React from 'react';
import { Box, Center, Heading, Image, HStack, ScrollView, Text, VStack } from "native-base";

export default function Produtos() {

    return (

        <Box flexDir={'column'} alignItems={'center'}>

            <Heading fontSize="5xl">
                Produtos
            </Heading>

            <Box borderRadius={30} shadow={30} bg="#fffafa" w="90%" alignItems={'center'}>
                <Text fontSize="2xl" bold m={5}>Terço Personalizado</Text>

                <HStack space={3} w="100%" alignItems={'center'} justifyContent={'center'}>
                    <Box paddingX={4}>
                        <Image
                            source={require('../img/img10.jpg')}
                            width={150}
                            height={250}
                            borderRadius={15}
                            alt='Terço Personalizado Menino'
                        />
                    </Box>

                    <Box paddingX={4}>
                        <Image
                            source={require('../img/img09.jpg')}
                            width={150}
                            height={250}
                            borderRadius={15}
                            alt='Terço Personalizado Menina'
                        />
                    </Box>

                </HStack>

                <Text fontSize="md" marginX={5} marginTop={5} textAlign={'justify'}>Terço personalizado com 1 nome. Contas de 8mm emborrachadas, feito com fio encerado, cruz e entremeio emborrachados ou em metal. Todos os materiais que utilizamos são reforçados e de excelente qualidade, o que possibilita uma maior durabilidade do produto, fazemos questão de priorizar a qualidade dos nossos produtos. O terço tem aproximadamente 40 cm.</Text>

                <Text fontSize="xs" marginX={5} marginTop={2} textAlign={'justify'} color={"red.700"}>ATENÇÃO: Para realizar o seu pedido, envie uma mensagem com o nome e a cor que deseja personalizar em cada terço.</Text>

                <Text fontSize="4xl" bold color="darkBlue.500" mt={2}>R$ 30,00</Text>
            </Box>

            <Box borderRadius={30} shadow={30} bg="#fffafa" w="90%" alignItems={'center'} m={5}>
                
                <Text fontSize="2xl" bold marginX={5} marginTop={5}>Chaveiro Personalizado</Text>

                <Box paddingX={4} marginY={5}>
                    <Image
                        source={require('../img/img28.jpg')}
                        width={300}
                        height={180}
                        borderRadius={15}
                        alt='Chaveiro Personalizado Feminino'
                    />
                </Box>

                <Text fontSize="md" marginX={5} marginTop={5} textAlign={'justify'}>Chaveiro personalizado com 1 nome. Contas de 8mm emborrachadas, feito com fio encerado, acessórios a escolha do cliente. Todos os materiais que utilizamos são reforçados e de excelente qualidade, o que possibilita uma maior durabilidade do produto, fazemos questão de priorizar a qualidade dos nossos produtos. O chaveiro tem aproximadamente 10 cm.</Text>

                <Text fontSize="xs" marginX={5} marginTop={2} textAlign={'justify'} color={"red.700"}>ATENÇÃO: Para realizar o seu pedido, envie uma mensagem com o nome e a cor que deseja personalizar em cada chaveiro.</Text>

                <Text fontSize="4xl" bold color="darkBlue.500" mt={2}>R$ 10,00</Text>
            </Box>

        </Box>
    );
}
