import * as React from 'react';
import { Box, Center, Heading, HStack, Text } from "native-base";

export default function Produtos() {

    return (

        <Center>
            <Heading p={10} m={5}>
            Produtos
            </Heading>
            
            <Box w="100%" p={10}>

                <Text fontSize="lg" bold m={5}>Terço Personalizado</Text>

                <HStack padding={4} h="150" w="80%" alignItens="center" justifyContent="center" showHorizontalScrollIndicator={false}>

                    <Box>
                        <Image source={require('../src/img/img10.jpg')} alt="Terço Personalizado Menino" heigth="150" width="90" br={15}/>
                        <Image source={require('../src/img/img09.jpg')} alt="Terço Personalizado Menina" heigth="150" width="90" br={15}/>
                        <Image source={require('../src/img/img12.jpg')} alt="Terço Personalizado Feminino" heigth="150" width="90" br={15}/>
                        <Image source={require('../src/img/img18.jpg')} alt="Terço Personalizado Masculino" heigth="150" width="90" br={15}/>
                        <Image source={require('../src/img/img19.jpg')} alt="Terço Personalizado Sortidos" heigth="150" width="90" br={15}/>
                    </Box>

                    
                </HStack>

                <Text fontSize="md" m={5}>Terço personalizado com 1 nome. Contas de 8mm emborrachadas, feito com fio encerado, cruz e entremeio emborrachados ou em metal. Todos os materiais que utilizamos são reforçados e de excelente qualidade, o que possibilita uma maior durabilidade do produto, fazemos questão de priorizar a qualidade dos nossos produtos. O terço tem aproximadamente 40 cm.</Text>
                
                <Text fontSize="sm" m={5}>ATENÇÃO: Para realizar o seu pedido, envie uma mensagem com o nome e a cor que deseja personalizar em cada terço.</Text>

                <Text fontSize="lg" bold color="darkBlue.600" mt={10}>R$ 30,00</Text>

            </Box>

            <Box w="100%" p={10}>

                <Text fontSize="lg" bold m={5}>Chaveiro Personalizado</Text>

                <HStack padding={4} h="150" w="80%" alignItens="center" justifyContent="center" showHorizontalScrollIndicator={false}>

                    <Box>
                        <Image source={require('../src/img/img28.jpg')} alt="Chaveiro Personalizado Feminino" heigth="90" width="150" br={15}/>
                        <Image source={require('../src/img/img25.jpg')} alt="Terço Personalizado Masculino" heigth="90" width="150" br={15}/>
                        <Image source={require('../src/img/img28.jpg')} alt="Terço Personalizado Menina" heigth="90" width="150" br={15}/>
                        <Image source={require('../src/img/img21.jpg')} alt="Terço Personalizado Menino" heigth="90" width="150" br={15}/>
                        <Image source={require('../src/img/img24.jpg')} alt="Terço Personalizado Sortidos" heigth="90" width="150" br={15}/>
                    </Box>

                    
                </HStack>

                <Text fontSize="md" m={5}>Chaveiro personalizado com 1 nome. Contas de 8mm emborrachadas, feito com fio encerado, acessórios a escolha do cliente. Todos os materiais que utilizamos são reforçados e de excelente qualidade, o que possibilita uma maior durabilidade do produto, fazemos questão de priorizar a qualidade dos nossos produtos. O chaveiro tem aproximadamente 10 cm.</Text>
                
                <Text fontSize="sm" m={5}>ATENÇÃO: Para realizar o seu pedido, envie uma mensagem com o nome e a cor que deseja personalizar em cada chaveiro.</Text>

                <Text fontSize="lg" bold color="darkBlue.600" mt={10}>R$ 10,00</Text>

            </Box>

        </Center>

    );
}
