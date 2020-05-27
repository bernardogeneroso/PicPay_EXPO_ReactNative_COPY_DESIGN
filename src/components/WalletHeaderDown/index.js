import React, { useState } from 'react';
import {Switch,StyleSheet} from 'react-native';

import {Container, Label, Hr} from './styles';

export default function WalletHeaderDown() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <Container>
        <Label>Usar saldo ao pagar</Label>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Container>
      <Hr />
    </>
  );
}
