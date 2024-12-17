import styled from "styled-components";
import { cores } from "../../style";

export const Container = styled.div`
  background-color: ${cores.laranja};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
export const RedesSociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32.5px;
  margin-bottom: 80px;
  gap: 8px;
`;
export const DescriptionFooter = styled.p`
  font-size: 10px;
  max-width: 480px;
  width: 100%;
  text-align: center;
`;
