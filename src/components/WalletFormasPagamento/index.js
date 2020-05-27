import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {Container, Title, CardCredito, CardContent, DetailsLeft, Details, DetailsCategory, Label, Description, SmallText} from './styles';

export default function WalletFormasPagamento() {
  return (
    <Container>
      <Title>FORMAS DE PAGAMENTO</Title>
      <CardCredito>
        <CardContent>
          <DetailsLeft>
            <FontAwesome
              name="cc-visa" 
              size={30} 
              color={'#000'}
            />
          </DetailsLeft>
          <Details>
            <Label>Meu cartão</Label>
            <Description>Cartão com final 1234</Description>  
          </Details>
          <DetailsCategory>
            <SmallText>Principal</SmallText>
          </DetailsCategory>
        </CardContent>
      </CardCredito>
    </Container>
  );
}