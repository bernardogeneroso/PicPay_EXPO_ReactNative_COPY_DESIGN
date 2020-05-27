import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const HeaderWallet = styled(LinearGradient) `
  height: 262px;
  padding: 16px;
`;

export const Headerstatus = styled.View `
  flex-direction: row-reverse;
`;

export const HeaderBody = styled.View `
  align-items: center;
  text-align: center;
  margin-top: 12px;
`;

export const Text = styled.Text `
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
`;

export const Title = styled.Text `
  margin: 8px;
  font-weight: bold;
  color: #fff;
  font-size: 28px;
`;

export const Bold = styled.Text `
  font-weight: bold;
  color: #fff;
`;

export const NoBold = styled.Text `
  font-weight: normal;
  color: rgba(255, 255, 255, 0.9);
`;

export const HeaderFooter = styled.View `
  flex-direction: row;
  justify-content: space-around;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity `
  flex-direction: row;
  align-items: center;
  align-self: center;
  align-content: center;
  border: solid 1px rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  padding: 6px 20px;
  width: 160px;
`;

export const Label = styled.Text `
  margin-left: 6px;
  color: rgba(255, 255, 255, 0.8);
`;