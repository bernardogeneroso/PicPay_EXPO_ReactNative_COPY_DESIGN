import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Button = styled(LinearGradient) `
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text `
  font-size: 10px;
  color: ${({focused}) => focused ? '#000' : '#fff'};
`;