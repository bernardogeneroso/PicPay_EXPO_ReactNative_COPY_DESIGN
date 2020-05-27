import React from 'react';
import { MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import {Container, Card, Details, Label, ContentCard, Promotion, Code} from './styles';

export default function WalletAddCartCredit() {
  return (
    <Container>
      <ContentCard>
        <Card>
          <Details>
            <MaterialIcons
              name="add-circle-outline" 
              size={30} 
              color={'#000'}
              style={{color: '#11C76F'}}
            />
            <Label>Adicionar cartão de crédito</Label>
          </Details>
        </Card>
      </ContentCard>
      <Promotion>
        <MaterialCommunityIcons
          name="ticket-outline" 
          size={30} 
          color={'#000'}
          style={{color: '#11C76F'}}
        />
        <Code>User código promocional</Code>
      </Promotion>
    </Container>
  );
}