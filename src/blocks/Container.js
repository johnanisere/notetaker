import styled, { css } from "styled-components";

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1270px;
  ${({ center }) =>
    center &&
    css`
      padding-top: 100px;
      justify-content: center;
      align-items: center;
      max-width: 600px;
    `}
  ${({ wrap }) =>
    wrap &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
      padding-left: 20px;
      padding-top: 30px;
      @media (max-width: 1316px) {
        max-width: 838px;
      }
      @media (max-width: 897px) {
        max-width: 420px;
      }
    `}
`;
