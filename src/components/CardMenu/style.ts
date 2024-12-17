import styled from "styled-components";
import { cores } from "../../style";

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.laranja};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  max-width: 320px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background-color: ${cores.laranja};
  color: ${cores.vermelho};
  border: none;
  cursor: pointer;
`;
