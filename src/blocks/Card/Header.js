import styled from "styled-components";

import H2 from "../../elements/H2";

export default styled(H2)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px;
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  padding: 8px 12px;
  button {
    visibility: hidden;
  }
  &:hover {
    button {
      visibility: visible;
    }
  }
`;
