import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {Platform} from 'react-native';

import {HeaderWallet, Headerstatus, HeaderBody, Text, Title, Bold, NoBold, HeaderFooter, Button, Label} from './styles';

export default function WalletHeader() {
  return (
  <TouchableWithoutFeedback>
    <HeaderWallet colors={['#00fc6c', '#00ac4a']} start={[1, 0.2]}>
      <Headerstatus style={(Platform.OS === 'ios')? {marginTop: 25} :{marginTop: 0}}>
        <Ionicons
          name="ios-stats" 
          size={30}
          color={'#fff'}
        />
      </Headerstatus>

      <HeaderBody>
        <Text>Saldo PicPay</Text>
        <Title>120,00 <NoBold>€</NoBold></Title>
        <Text>Seu saldo está redendo <Bold>100% do CDI</Bold></Text>
      </HeaderBody>

      <HeaderFooter>
        <Button>
          <MaterialCommunityIcons 
            name="bank-transfer-in" 
            size={30} 
            color={'#fff'} 
          />
          <Label>Adicionar</Label>
        </Button>
        <Button>
          <MaterialCommunityIcons 
            name="bank-transfer-out" 
            size={30} 
            color={'#fff'} 
          />
          <Label>Retirar</Label>
        </Button>
      </HeaderFooter>
    </HeaderWallet>
  </TouchableWithoutFeedback>
  );
}
