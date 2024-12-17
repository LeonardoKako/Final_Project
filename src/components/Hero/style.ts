import styled from "styled-components";
import { cores } from "../../style";

export const Image = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  width: 100%;
  padding-left: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${cores.branco};
  position: relative;
`;
export const TelaPreta = styled.div`
  position: absolute;
  height: 280px;
  width: 100%;
  background-color: #000;
  opacity: 50%;
  top: 0;
  left: 0;
`;
export const Type = styled.h1`
  margin-top: 25px;
  font-size: 32px;
  font-weight: 100;
  z-index: 1;
`;
export const Name = styled.h1`
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 900;
  z-index: 1;
`;
