import styled from "styled-components";
import { cores } from "../../style";

export const CardRestaurante = styled.div`
  width: 100%;
  max-width: 472px;
  height: 400px;
  border: 1px solid ${cores.vermelho};
  background-color: ${cores.branco};
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;

    span {
      display: flex;
    }
  }
`;

export const Tag = styled.div`
  margin-left: 10px;
  background-color: ${cores.vermelho};
  color: ${cores.laranja};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
`;

export const Tags = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
`;

export const Star = styled.img`
  margin-left: 8px;
`;

export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  line-height: 22px;
`;

export const Button = styled.button`
  color: ${cores.laranja};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  max-width: 82px;
  border: none;
  background-color: ${cores.vermelho};
  margin: 8px;
  cursor: pointer;
`;
