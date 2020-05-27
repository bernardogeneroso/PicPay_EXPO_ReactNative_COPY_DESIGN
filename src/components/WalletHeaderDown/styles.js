import styled from 'styled-components/native';

export const Container = styled.View `
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #000;
  padding: 14px;
`;

export const Label = styled.Text `
  font-size: 12px;
  color: #fff;
  opacity: 0.7;
`;

export const Hr = styled.View `
  border: 1px solid gray;
`;
